// const { readFeedback, writeFeedback } = require('./FeedbackUtil'); // Import shared utility functions

// // Function to update feedback if it exists
// async function updateFeedback(email, feedbackText, filename) {
//     if (!filename) {
//         throw new Error("Filename is required but was not provided.");
//     }

//     const feedbackList = await readFeedback(filename);
//     const existingFeedbackIndex = feedbackList.findIndex(fb => fb.email === email);

//     if (existingFeedbackIndex !== -1) {
//         // Check if feedback is unchanged
//         if (feedbackList[existingFeedbackIndex].feedbackText === feedbackText) {
//             return { unchanged: true }; // Signal that no changes were made
//         }

//         // Update existing feedback
//         feedbackList[existingFeedbackIndex].feedbackText = feedbackText;
//         await writeFeedback(feedbackList, filename);
//         return { unchanged: false }; // Signal that changes were made
//     }

//     // If the email doesn't exist, throw a specific error
//     throw new Error("Email not found in the database. Unable to update feedback.");
// }

// module.exports = { updateFeedback };



const { readFeedback, writeFeedback } = require('./FeedbackUtil'); // Import shared utility functions

// Function to update feedback if it exists
async function updateFeedback(email, feedbackText, filename) {
    if (!filename) {
        console.error("Filename is required but was not provided."); // Log the error
        return { error: "Filename is missing. Operation could not be completed." }; // Return an error response
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
    }

    console.error("Email not found in the database. Unable to update feedback."); // Log the error
    return { error: "Email not found in the database. Unable to update feedback." }; // Return an error response
}

module.exports = { updateFeedback };
