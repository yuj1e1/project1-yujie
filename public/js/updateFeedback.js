function showAlert(message) {
    alert(message); // Reusable function for showing alerts
}


function retrieveFeedback() {
    const email = document.getElementById("email").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showAlert('Invalid email address. Please provide a valid email in the format: user@example.com');
        return;
    }

    const request = new XMLHttpRequest();
    request.open("GET", `/feedback/${email}`, true);

    request.onload = function () {
        try {
            const response = JSON.parse(request.responseText);
            if (request.status >= 200 && request.status < 300) {
                const feedbackElement = document.getElementById("feedback");
                feedbackElement.value = response.feedbackText || '';
                feedbackElement.defaultValue = response.feedbackText || '';
                document.getElementById("email").readOnly = true;
            } else {
                // Use the response message from the server if available, or fallback to a default error message
                showAlert(response.message || 'An unexpected error occurred while retrieving feedback.');
            }
        } catch (error) {
            showAlert('Failed to process the server response. Please try again.');
        }
    };

    request.onerror = function () {
        showAlert('Request failed. Please check your network connection.');
    };

    request.send();
}


// function updateFeedback() {
//     const email = document.getElementById("email").value;
//     const feedbackElement = document.getElementById("feedback");
//     const feedback = feedbackElement.value;

//     if (!feedback.trim()) {
//         showAlert('Feedback cannot be empty. Please provide your feedback.');
//         return;
//     }

//     if (feedback === feedbackElement.defaultValue) {
//         showAlert('No changes made');
//         return;
//     }

//     const request = new XMLHttpRequest();
//     request.open("PUT", `/update-feedback/${email}`, true);
//     request.setRequestHeader('Content-Type', 'application/json');

//     request.onload = function () {
//         try {
//             const response = JSON.parse(request.responseText);
//             if (request.status >= 200 && request.status < 300) {
//                 showAlert(response.message || 'Feedback updated successfully.');
//                 feedbackElement.defaultValue = feedback;
//             } else {
//                 showAlert(response.message || 'An unexpected error occurred while updating feedback.');
//             }
//         } catch (error) {
//             showAlert('Failed to process the server response. Please try again.');
//         }
//     };

//     request.onerror = function () {
//         showAlert('Request failed. Please check your network connection.');
//     };

//     request.send(JSON.stringify({ feedback }));
// }



function updateFeedback() {
    const email = document.getElementById("email").value;
    const feedbackElement = document.getElementById("feedback");
    const feedback = feedbackElement.value.trim();

    if (!feedback) {
        showAlert('Feedback cannot be empty. Please provide your feedback.');
        return;
    }

    if (feedback === feedbackElement.defaultValue) {
        showAlert('No changes made to the feedback.'); // This matches the backend message
        return;
    }

    const request = new XMLHttpRequest();
    request.open("PUT", `/update-feedback/${email}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            showAlert(response.message);
        } else {
            showAlert('An unexpected error occurred while updating feedback.'); // Generic error message
        }
    };

    

    request.send(JSON.stringify({ feedback }));
}
