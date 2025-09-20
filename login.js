document.getElementById("loginForm").addEventListener("submit", function(event){
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var user = localStorage.getItem(username);
        if(user){
            var parsedUser = JSON.parse(user);
            if (parsedUser.password === password) {
                localStorage.setItem("user", JSON.stringify(parsedUser));
                window.location.href = "welcome.html";
            } else {
                document.getElementById("error-message").innerHTML = "Incorrect password";
                setTimeout(() => { document.getElementById("error-message").innerHTML = ""; }, 3000);
            }

        }else{
            document.getElementById("error-message").innerHTML = "No users found, please register first";
                setTimeout(() => { document.getElementById("error-message").innerHTML = ""; }, 3000);
        }
    });