// auth.js - Shared Authentication Logic
document.addEventListener('DOMContentLoaded', function() {
    syncLoginStatus();
});

function syncLoginStatus() {
    const loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) return;

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // Change button to Log Out
        loginBtn.innerText = "LOG OUT";
        loginBtn.style.background = "#f3ecec"; // Optional: change color to show state change
        
        loginBtn.onclick = function(e) {
            e.preventDefault();
            if(confirm("Are you sure you want to log out?")) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser'); // If you store usernames
                window.location.href = '/index.html'; // Redirect to home on logout
            }
        };
    } else {
        // Ensure button says Log In if NOT logged in
        loginBtn.innerText = "LOG IN";
        loginBtn.style.background = "#efe2e2";
        
        loginBtn.onclick = function() {
            window.location.href = '/login.html';
        };
    }
}

// Helper to handle the 'Redirect Back' after login
function checkLoginRedirect() {
    const redirectTo = localStorage.getItem('redirectAfterLogin');
    if (redirectTo) {
        localStorage.removeItem('redirectAfterLogin');
        window.location.href = redirectTo;
    } else {
        window.location.href = '/index.html';
    }
}