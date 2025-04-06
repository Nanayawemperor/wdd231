

// Handling modal opening
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Set current timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// For the thank-you page, displaying form data
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('first-name').textContent = urlParams.get('first-name');
document.getElementById('last-name').textContent = urlParams.get('last-name');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('business-name').textContent = urlParams.get('organization');
document.getElementById('membership-level').textContent = urlParams.get('membership-level');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');

