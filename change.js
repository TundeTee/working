document.getElementById("pass").addEventListener("submit", function(event) {
        event.preventDefault();
    var oldPassword = document.getElementById("change").value;
    var newPassword = document.getElementById("confirm-change").value;
    var confirmNewPassword = document.getElementById("confirm-password").value;
    var oldError = document.getElementById("old-error");
    var newError = document.getElementById("new-error");
     var success = document.getElementById("success");

    // Get current user from localStorage
    var user = localStorage.getItem("user");
    if (!user) {
        newError.innerHTML = "No user logged in.";
        setTimeout(() => { newError.innerHTML = ""; }, 2000);
        return;
    }
    var parsedUser = JSON.parse(user);

    // Check old password
    if (parsedUser.password !== oldPassword) {
        oldError.innerHTML = "Old password is incorrect.";
        setTimeout(() => { newError.innerHTML = ""; }, 2000);
        return;
    }

    // Check new passwords match
    if (newPassword !== confirmNewPassword) {
        newError.innerHTML = "Passwords do not match";
        setTimeout(() => { newError.innerHTML = ""; }, 2000);
        return;
    }

    // Check new password strength
    if (newPassword.length < 6) {
        oldError.innerHTML = "Password must be at least 6 characters long";
        setTimeout(() => { newError.innerHTML = ""; }, 2000);
        return;
    }

    // Update password and save
    parsedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(parsedUser)); // update session
    localStorage.setItem(parsedUser.username, JSON.stringify(parsedUser)); // update main user record
    success.innerHTML = "Password changed successfully!";
    setTimeout(() => { success.innerHTML = ""; }, 1000);
    window.location.href = "welcome.html";
    // Optionally, redirect or reset form here

});