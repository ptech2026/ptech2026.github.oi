// adAuth.js - Admin Authentication & Route Guard
document.addEventListener('DOMContentLoaded', function() {
    // 1. Protect Admin Pages: If on home.html and not logged in, kick to login.
    const isLoginPage = window.location.pathname.includes('login.html');
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

    if (!isLoggedIn && !isLoginPage && window.location.pathname.includes('/Admin/')) {
        window.location.href = '/Admin/login.html';
        return;
    }

    syncLoginStatus();
});

function syncLoginStatus() {
    const loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) return;

    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

    if (isLoggedIn) {
        loginBtn.innerText = "LOG OUT";
        loginBtn.style.background = "#ff6b6b"; 
        loginBtn.onclick = function(e) {
            e.preventDefault();
            if(confirm("Are you sure you want to log out of Admin Panel?")) {
                localStorage.removeItem('isAdminLoggedIn');
                window.location.href = '/Admin/login.html';
            }
        };
    } else {
        loginBtn.innerText = "LOG IN";
        loginBtn.onclick = () => window.location.href = '/Admin/login.html';
    }
}