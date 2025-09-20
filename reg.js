    // document.getElementById("registerForm").addEventListener("submit", function(event){
    //     event.preventDefault();
    //     var surName = document.getElementById("surname").value;
    //     var firstName = document.getElementById("firstname").value;
    //     var username = document.getElementById("username").value;
    //     var password = document.getElementById("password").value;
    //     var confirmPassword = document.getElementById("confirmPassword").value;
    //     if(password !== confirmPassword){
    //          document.getElementById("password-error").innerHTML = "Passwords do not match";
    //          settimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000); 
    //         return;
    //     }
    //     if (password === "password" || password === "123456" || password === "098754") {
    //          document.getElementById("password-error").innerHTML = "Password is too weak";
    //          setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
    //         return;
    //     }
    //      if (password.length < 6) {
    //          document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long";
    //          setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
    //         return;
    //     }
    //     if(username.length < 3){
    //          document.getElementById("username-error").innerHTML = "Username must be at least 3 characters long";
    //          settimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
    //         return;
    //     }
    //     if(username.includes(" ")){
    //          document.getElementById("username-error").innerHTML = "Username cannot contain spaces";
    //             setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);    
    //         return;
    //     }
    //     if(username.toLowerCase() === "admin" || username.toLowerCase() === "user" || username.toLowerCase() === "null"){
    //         document.getElementById("username-error").innerHTML = "This username is not allowed";
    //         setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
    //         return;
    //     }
        
    //     if(surName.includes("1") || surName.includes("2") || surName.includes("3") || surName.includes("4") || surName.includes("5") || surName.includes("6") || surName.includes("7") || surName.includes("8") || surName.includes("9") || surName.includes("0")){
    //         document.getElementById("name-error").innerHTML = "Name cannot contain numbers";

    //         setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
    //         return;
    //     }   
        
    //     if(surName.includes("1") || surName.includes("2") || surName.includes("3") || surName.includes("4") || surName.includes("5") || surName.includes("6") || surName.includes("7") || surName.includes("8") || surName.includes("9") || surName.includes("0")){
    //         document.getElementById("name-error").innerHTML = "Name cannot contain numbers";

    //         setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
    //         return;
    //     }   
        
    //     if(firstName.includes("1") || firstName.includes("2") || firstName.includes("3") || firstName.includes("4") || firstName.includes("5") || firstName.includes("6") || firstName.includes("7") || firstName.includes("8") || firstName.includes("9") || firstName.includes("0")){
    //         document.getElementById("name-error").innerHTML = "Name cannot contain numbers";

    //         setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
    //         return;
    //     }   
    //     const user = {
    //         name: `${surName} ${firstName}`,
    //         username: username,
    //         password: password
    //     };
    //     localStorage.setItem(username, JSON.stringify(user));
    //     alert("Registration successful, please login");
    //     window.location.href = "login.html";
    // });


window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", function(event){
        event.preventDefault();
        var surName = document.getElementById("surname").value;
        var firstName = document.getElementById("firstname").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var email = document.getElementById("email").value;
        var secretQuestionIndex = document.getElementById('secret-question').value;
        var secretAnswer = document.getElementById('secret-answer').value.trim();
        if(password !== confirmPassword){
             document.getElementById("password-error").innerHTML = "Passwords do not match";
             setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000); 
            return;
        }
        if (password === "password" || password === "123456" || password === "098754") {
             document.getElementById("password-error").innerHTML = "Password is too weak";
             setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
            return;
        }
         if (password.length < 6) {
             document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long";
             setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
            return;
        }
        if(username.length < 3){
             document.getElementById("username-error").innerHTML = "Username must be at least 3 characters long";
             setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
            return;
        }
        if(username.includes(" ")){
             document.getElementById("username-error").innerHTML = "Username cannot contain spaces";
                setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);    
            return;
        }
        if(username.toLowerCase() === "admin" || username.toLowerCase() === "user" || username.toLowerCase() === "null"){
            document.getElementById("username-error").innerHTML = "This username is not allowed";
            setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
            return;
        }
        if(surName.match(/\d/)){
            document.getElementById("name-error").innerHTML = "Name cannot contain numbers";
            setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
            return;
        }   
        if(firstName.match(/\d/)){
            document.getElementById("name-error").innerHTML = "Name cannot contain numbers";
            setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
            return;
        }   
        const user = {
            name: `${surName} ${firstName}`,
            username: username,
            password: password,
            email: email,
            secretQuestionIndex: Number(secretQuestionIndex),
            secretAnswer: secretAnswer
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Registration successful, please login");
        window.location.href = "login.html";
    });
});