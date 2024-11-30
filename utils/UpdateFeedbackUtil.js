// const { readFeedback, writeFeedback } = require('./FeedbackUtil'); // Import shared utility functions

// // Function to update feedback if it exists
// async function updateFeedback(email, feedbackText, filename) {
//     if (!filename) {
//         throw new Error("Filename is required but was not provided.");
//     }

//     const feedbackList = await readFeedback(filename);
//     const existingFeedbackIndex = feedbackList.findIndex(fb => fb.email === email);

//     if (existingFeedbackIndex !== -1) {
//         // Update existing feedback
//         feedbackList[existingFeedbackIndex].feedbackText = feedbackText;
//         await writeFeedback(feedbackList, filename);
//     } else {
//         throw new Error("Email not found in the database. Unable to update feedback.");
//     }
// }

// module.exports = { updateFeedback };

const { readFeedback, writeFeedback } = require('./FeedbackUtil'); // Import shared utility functions

// Function to update feedback if it exists
async function updateFeedback(email, feedbackText, filename) {
    if (!filename) {
        throw new Error("Filename is required but was not provided.");
    }

    const feedbackList = await readFeedback(filename);
    const existingFeedbackIndex = feedbackList.findIndex(fb => fb.email === email);

    if (existingFeedbackIndex !== -1) {
        // Check if feedback is unchanged
        if (feedbackList[existingFeedbackIndex].feedbackText === feedbackText) {
            return { unchanged: true }; // Signal that no changes were made
        }

        // Update existing feedback
        feedbackList[existingFeedbackIndex].feedbackText = feedbackText;
        await writeFeedback(feedbackList, filename);
        return { unchanged: false }; // Signal that changes were made
    } else {
        throw new Error("Email not found in the database. Unable to update feedback.");
    }
}

module.exports = { updateFeedback };
