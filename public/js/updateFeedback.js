
function showAlert(message) {
    alert(message); // Reusable function for showing alerts
}

function retrieveFeedback() {
    const email = document.getElementById("email").value;

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showAlert('Invalid email address. Please provide a valid email in the format: user@example.com');
        return;
    }

    const request = new XMLHttpRequest();
    request.open("GET", `/feedback/${email}`, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            const response = JSON.parse(request.responseText);
            if (response) {
                const feedbackElement = document.getElementById("feedback");
                feedbackElement.value = response.feedbackText;
                feedbackElement.defaultValue = response.feedbackText; // For detecting changes
                document.getElementById("email").readOnly = true;
            } else {
                showAlert('No feedback found for this email.'); // Alert for unregistered email
            }
        } else if (request.status === 404) {
            // Alert specifically for missing feedback files
            showAlert('The email you entered is not recognized. Please try again with a registered email.');
        } else {
            showAlert('An unexpected error occurred while retrieving feedback.');
        }
    };

    request.onerror = function () {
        showAlert('Request failed. Please check your network connection.');
    };

    request.send();
}

function updateFeedback() {
    const email = document.getElementById("email").value;
    const feedbackElement = document.getElementById("feedback");
    const feedback = feedbackElement.value;

    if (!feedback) {
        showAlert('Feedback cannot be empty. Please provide your feedback.');
        return;
    }

    if (feedback === feedbackElement.defaultValue) {
        showAlert('No changes were detected in the feedback. Please make updates before submitting.');
        return;
    }

    const request = new XMLHttpRequest();
    request.open("PUT", `/update-feedback/${email}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            const response = JSON.parse(request.responseText);
            showAlert(response.message);
            feedbackElement.defaultValue = feedback; // Update defaultValue after a successful update
        } else {
            const response = JSON.parse(request.responseText);
            if (response.message.includes('Feedback file not found')) {
                showAlert('Feedback file not found. Please contact support.');
            } else {
                showAlert('The email you entered is not recognized. Please try again with a registered email.');
            }
        }
    };

    request.onerror = function () {
        showAlert('Request failed. Please check your network connection.');
    };

    request.send(JSON.stringify({ feedback }));
}
