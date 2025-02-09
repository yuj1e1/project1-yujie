var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const logger = require('./logger');
const PORT = process.env.PORT || 5050;
var startPage = "index.html";

// Prometheus Setup
const client = require('prom-client');

// Create a Registry for Prometheus
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Create a custom metric to track HTTP requests
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
});
register.registerMetric(httpRequestCounter);

// Create a metric to track response duration
const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 3, 5] // Buckets for response time in seconds
});
register.registerMetric(httpRequestDuration);

// Middleware to log HTTP requests and response duration
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        let route = req.route ? req.route.path : req.path;
        route = route.replace(/\/[^/]+$/, "/:email"); // Normalize dynamic routes

        httpRequestCounter.inc({ 
            method: req.method, 
            route: route, 
            status_code: res.statusCode 
        });

        const duration = (Date.now() - start) / 1000; // Convert ms to seconds
        httpRequestDuration.observe({ 
            method: req.method, 
            route: route, 
            status_code: res.statusCode 
        }, duration);
    });
    next();
});

// Expose `/metrics` endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

const statusMonitor = require('express-status-monitor');
app.use(statusMonitor());


const { getFeedbackByEmail } = require('./utils/FeedbackUtil');
const { updateFeedback } = require('./utils/UpdateFeedbackUtil');
const { addFeedback } = require('./utils/CreateFeedbackUtil');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
});

const {addRecipe , viewRecipe, viewRecipeById, deleteRecipe} = require('./utils/RecipeUtils');
const {updateRecipe} = require ('./utils/updateRecipeUtils');

app.post('/addRecipe', addRecipe);
app.get('/viewRecipe', viewRecipe); // View a recipe 
app.delete('/deleteRecipe/:id', deleteRecipe); // Delete a recipe by id
app.put('/updateRecipe/:id', updateRecipe); // Update a recipe by id

app.get('/viewRecipe/:id', viewRecipeById); // View a recipe by id

app.post('/create-feedback', async (req, res) => {
    const { email, feedback } = req.body;

    // Email format validation on the server
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    try {
        // Check if feedback for the email already exists
        const existingFeedback = await getFeedbackByEmail(email, 'utils/feedback.json');

        if (existingFeedback) {
            return res.status(409).json({ message: 'Feedback already exists. Redirect to update page.' });
        }

        // If no existing feedback, add the new feedback
        await addFeedback(email, feedback, 'utils/feedback.json');
        res.status(201).json({ message: 'Feedback created successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Route to retrieve feedback by email -- update feedback
app.get('/feedback/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const feedback = await getFeedbackByEmail(email, 'utils/feedback.json');
        if (feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message: 'No feedback found for this email.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.put('/update-feedback/:email', async (req, res) => {
    let feedback;

    try {
        feedback = req.body.feedback;
    } catch (error) {
        // Handle malformed JSON or null request body
        return res.status(500).json({ message: 'Request failed. Please check your network connection.' });
    }

    const email = req.params.email;

    if (!feedback || feedback.trim() === "") {
        return res.status(400).json({ message: 'Feedback is required!' });
    }

    try {
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return res.status(400).json({ message: 'Invalid email address.' });
        }

        const result = await updateFeedback(email, feedback, 'utils/feedback.json');

        if (result.error === "Invalid email format.") {
            return res.status(400).json({ message: result.error });
        }

        if (result.error === "Email not found in the database. Unable to update feedback.") {
            return res.status(404).json({ message: 'Email is unrecognized. Please enter a valid registered email.' });
        }

        if (result.unchanged) {
            return res.status(200).json({ message: 'No changes made to the feedback.' });
        }

        return res.status(200).json({ message: 'Feedback updated successfully!' });

    } catch (error) {
        return res.status(500).json({ message: 'Request failed. Please check your network connection.' });
    }
});


server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address == "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
    logger.info(`Demo project at: ${baseUrl}`);
    logger.error(`Example or error log`);
});

module.exports = { app, server };
