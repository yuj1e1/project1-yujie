1
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const PORT = process.env.PORT || 5050;
var startPage = "index.html";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./instrumented"));


const { getFeedbackByEmail } = require('./utils/FeedbackUtil');
const { updateFeedback } = require('./utils/UpdateFeedbackUtil');
const { addFeedback } = require('./utils/CreateFeedbackUtil');




app.get('/', (req, res) => {
    res.sendFile(__dirname + "/instrumented/" + startPage);
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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(404).json({ message: 'No feedback found for the provided email.' });
    }

    try {
        const existingFeedback = await getFeedbackByEmail(email, 'utils/feedback.json');

        if (!existingFeedback) {
            return res.status(404).json({ message: 'No feedback found for the provided email.' });
        }

        // Simulate server error for testing
        if (feedback === 'simulate-server-error') {
            throw new Error('Simulated server error');
        }

        // Handle unchanged feedback
        const result = await updateFeedback(email, feedback, 'utils/feedback.json');
        if (result.unchanged) {
            return res.status(200).json({ message: 'No changes made to the feedback.' });
        }

        return res.status(200).json({ message: 'Feedback updated successfully!' });

    } catch (error) {
        if (error.message.includes("Email not found")) {
            return res.status(404).json({ message: error.message });
        } else {
            return res.status(500).json({ message: 'Request failed. Please check your network connection.' });
        }
    }
});





server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address == "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
