// Function to validate the form fields
function validateForm() {
    if (document.getElementById('email').value === '') {
        alert('Email is required');
        return false;
    }

    if (document.getElementById('password').value === '') {
        alert('Password is required');
        return false;
    }

    if (document.getElementById('firstName').value === '') {
        alert('First Name is required');
        return false;
    }

    if (document.getElementById('lastName').value === '') {
        alert('Last Name is required');
        return false;
    }

    return true;
}

function sanitizeInput(input) {
    return input.replace(/<script.*?>.*?<\/script>/gi, 'sanitized');
}


document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();


    if (!validateForm()) {
        return; 
    }

    
    let comments = document.getElementById('comments').value;
    let sanitizedComments = sanitizeInput(comments);
    console.log('Sanitized comments:', sanitizedComments);

    
    let submissionMessage = document.getElementById('submission-message');
    submissionMessage.textContent = 'Data Submitted!';
    submissionMessage.style.display = 'block'; 

});

