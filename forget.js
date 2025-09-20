document.getElementById('forget-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('forget-username').value.trim();
      const email = document.getElementById('forget-email').value.trim();
      const error = document.getElementById('forget-error');
      const userData = localStorage.getItem(username);
      if (!userData) {
        error.textContent = "User not found.";
        setTimeout(() => error.textContent = "", 2000);
        return;
      }
      const user = JSON.parse(userData);
      if (user.email && user.email === email) {
        // Store username for reset step
        localStorage.setItem('resetUser', username);
        window.location.href = "secret.html";
      } else {
        error.textContent = "Username and email do not match.";
        setTimeout(() => error.textContent = "", 2000);
      }
    });