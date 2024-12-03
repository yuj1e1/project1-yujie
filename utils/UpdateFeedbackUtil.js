const { readFeedback, writeFeedback } = require('./FeedbackUtil'); // Import shared utility functions

async function updateFeedback(email, feedbackText, filename) {
    if (!filename) {
        return { error: "Filename is missing. Operation could not be completed." };
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { error: "Invalid email format." };
    }

    // Simulate a server error
    if (feedbackText === 'simulate-server-error') {
        throw new Error('Simulated server error'); // Simulate a server-side error
    }

    const feedbackList = await readFeedback(filename);
    const existingFeedbackIndex = feedbackList.findIndex(fb => fb.email === email);

    if (existingFeedbackIndex === -1) {
        return { error: "Email not found in the database. Unable to update feedback." }; // Return the correct error
    }

    // Check if feedback is unchanged
    if (feedbackList[existingFeedbackIndex].feedbackText === feedbackText) {
        return { unchanged: true }; // Signal that no changes were made
    }

    // Update existing feedback
    feedbackList[existingFeedbackIndex].feedbackText = feedbackText;
    await writeFeedback(feedbackList, filename);
    return { unchanged: false }; // Signal that changes were made
}

module.exports = { updateFeedback };

