document.getElementById('reset-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const newPassword = document.getElementById('reset-password').value;
      const confirmPassword = document.getElementById('reset-confirm').value;
      const error = document.getElementById('reset-error');
      const success = document.getElementById('reset-success');
      const username = localStorage.getItem('resetUser');
      if (!username) {
        error.textContent = "Session expired. Please try again.";
        setTimeout(() => error.textContent = "", 2000);
        return;
      }
      if (newPassword !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        setTimeout(() => error.textContent = "", 2000);
        return;
      }
      if (newPassword.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        setTimeout(() => error.textContent = "", 2000);
        return;
      }
      const userData = localStorage.getItem(username);
      if (userData) {
        const user = JSON.parse(userData);
        user.password = newPassword;
        localStorage.setItem(username, JSON.stringify(user));
        localStorage.removeItem('resetUser');
        success.textContent = "Password reset successful! Redirecting...";
        setTimeout(() => {
          success.textContent = "";
          window.location.href = "welcome.html";
        }, 1500);
      }
    });