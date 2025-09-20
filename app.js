window.addEventListener("DOMContentLoaded", function() {
    // Navbar
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-bar');
    const cancel = document.querySelector('.cancel');

    // Cart
    const cart = document.querySelector('.cart-detail');
    const cartIcon = document.querySelector('.bar-shop');
    const deleteIcon = document.querySelector('.delete');

    // Search
    const searchForm = document.getElementById("search-full");
    const barSearch = document.getElementById("bar-search");

    // Show/hide navbar
    if (menu && nav) {
        menu.addEventListener("click", (e) => {
            nav.classList.add('active');
            e.stopPropagation();
        });
    }
    if (cancel && nav) {
        cancel.addEventListener("click", () => {
            nav.classList.remove('active');
        });
    }

    // Show/hide cart
    if (cartIcon && cart) {
        cartIcon.addEventListener("click", (e) => {
            cart.classList.add('active');
            e.stopPropagation();
        });
    }
    if (deleteIcon && cart) {
        deleteIcon.addEventListener("click", () => {
            cart.classList.remove('active');
        });
    }

    // Show/hide search
    if (barSearch && searchForm) {
        barSearch.onclick = (e) => {
            searchForm.classList.toggle("active");
            e.stopPropagation();
        };
    }

    // Hide nav, cart, search on scroll
    window.onscroll = () => {
        if (nav) nav.classList.remove('active');
        if (searchForm) searchForm.classList.remove('active');
        if (cart) cart.classList.remove('active');
    };

    // Hide nav, cart, search on outside click
    document.addEventListener('click', function(event) {
        // Navbar
        if (nav && menu && !nav.contains(event.target) && !menu.contains(event.target)) {
            nav.classList.remove('active');
        }
        // Cart
        if (cart && cartIcon && !cart.contains(event.target) && !cartIcon.contains(event.target)) {
            cart.classList.remove('active');
        }
        // Search
        if (searchForm && barSearch && !searchForm.contains(event.target) && !barSearch.contains(event.target)) {
            searchForm.classList.remove('active');
        }
    });

    // User greeting and log-bar
    const logBar = document.querySelector(".log-bar");
    const userBar = document.getElementById("user-icon");
    let user = localStorage.getItem("user");
    if (window.location.pathname.endsWith("login.html") || window.location.pathname.endsWith("register.html")) {
        if (logBar) logBar.innerHTML = '<i class="ri-user-add-line"></i>';
        if (userBar) userBar.innerHTML = '<i class="ri-user-add-line"></i>';
    } else if (user) {
        let parsedUser = JSON.parse(user);
        let firstLetter = parsedUser.name ? parsedUser.name.charAt(0).toUpperCase() : "";
        if (logBar && firstLetter) logBar.textContent = firstLetter;
        if (userBar && firstLetter) userBar.textContent = firstLetter;
        // Welcome message
        let welcomeMsg = document.getElementById("welcome-message");
        if (welcomeMsg) {
            welcomeMsg.innerHTML = `Hello ${parsedUser.name}`;
        }
        // Hide list-option if present
        let listOption = document.getElementById("list-option");
        if (listOption) listOption.classList.remove("list-option");
    } else {
        // Not logged in
        let welcomeMsg = document.getElementById("welcome-message");
        if (welcomeMsg) {
            welcomeMsg.innerHTML = `Welcome <ul class="log-set"> 
                <li><a href="register.html" >Join Us to Shop with us</a></li>
                <li><a href="login.html" > login </a></li>
            </ul>`;
        }
        let cartDetails = document.getElementById("cart-detail");
        if (cartDetails) {
            cartDetails.innerHTML = `<i class="ri-close-large-line delete"></i>
                <h3 class="head-cart">No Cart</h3>
                <div class="error">
                    <p>login to view your Cart <a href="login.html">Click here to login</a></p>
                </div>
                <div class="total-product" id="total-product">
                    <p>TOTAL = <span class="result"> $00.00</span></p>
                </div>`;
        }
    let cartSpan = this.document.getElementById("shop-number");
    if(cartSpan){
        cartSpan.innerHTML = `<span class="shop-number" id="shop-number"></span>`;
    }
    }

    // Log out button
    const logBtn = document.getElementById("logBtn");
    if (logBtn) {
        logBtn.addEventListener("click", function() {
            localStorage.removeItem("user");
            logBtn.textContent = "Log In";
            window.location.href = "login.html";
        });
    }
});








    

    


// window.addEventListener("DOMContentLoaded", function() {
//     const gettingLink = document.querySelector(".getting");
//     const passSection = document.querySelector(".pass");
//     const forgetSection = document.querySelector(".forget");

//     if (gettingLink && passSection && forgetSection) {
//         gettingLink.addEventListener("click", function(e) {
//             e.preventDefault();
//             passSection.style.display = "none";
//             forgetSection.style.display = "block";
//         });
//     }
// });


// window.addEventListener("DOMContentLoaded", function() {
//     // Elements
//     const forgetDiv = document.querySelector('.forget');
//     const resetDiv = document.querySelector('.reset');
//     const forgetBtn = document.getElementById('forget');
//     const forgetError = document.getElementById('forget-error');
//     const resetBtn = document.getElementById('reset');
//     const resetError = document.getElementById('reset-error');
//     const resetSuccess = document.getElementById('reset-success');

//     let matchedUsername = null; // To store the matched username for reset

//     // Forget password submit
//     if (forgetBtn) {
//         forgetBtn.addEventListener('click', function() {
//             const username = document.getElementById('username').value.trim();
//             const email = document.getElementById('email').value.trim();

//             // Get user from localStorage
//             const userData = localStorage.getItem(username);
//             if (!userData) {
//                 forgetError.textContent = "User not found.";
//                 setTimeout(() => { forgetError.textContent = ""; }, 2000);
//                 return;
//             }
//             const user = JSON.parse(userData);

//             // Check email match (make sure you store email during registration)
//             if (user.email && user.email === email) {
//                 // Success: show reset, hide forget
//                 matchedUsername = username;
//                 if (forgetDiv) forgetDiv.style.display = "none";
//                 if (resetDiv) resetDiv.style.display = "block";
//             } else {
//                 forgetError.textContent = "Username and email do not match.";
//                 setTimeout(() => { forgetError.textContent = ""; }, 2000);
//             }
//         });
//     }

//     // Reset password submit
//     if (resetBtn) {
//         resetBtn.addEventListener('click', function() {
//             const newPassword = document.getElementById('password').value;
//             const confirmPassword = document.getElementById('confirm').value;

//             if (newPassword !== confirmPassword) {
//                 resetError.textContent = "Passwords do not match.";
//                 setTimeout(() => { resetError.textContent = ""; }, 2000);
//                 return;
//             }
//             if (newPassword.length < 6) {
//                 resetError.textContent = "Password must be at least 6 characters.";
//                 setTimeout(() => { resetError.textContent = ""; }, 2000);
//                 return;
//             }
//             // Update password in localStorage
//             if (matchedUsername) {
//                 const userData = localStorage.getItem(matchedUsername);
//                 if (userData) {
//                     const user = JSON.parse(userData);
//                     user.password = newPassword;
//                     localStorage.setItem(matchedUsername, JSON.stringify(user));
//                     resetSuccess.textContent = "Password reset successful! You can now log in.";
//                     setTimeout(() => {
//                         resetSuccess.textContent = "";
//                         window.location.href = "login.html";
//                     }, 1500);
//                 }
//             }
//         });
//     }
// });


// window.addEventListener("DOMContentLoaded", function() {
//     // Elements
//     const forgetLink = document.getElementById('forget-link'); // The "Forgot Password?" link/button
//     const forgetSection = document.getElementById('forget-section');
//     const resetSection = document.getElementById('reset-section');
//     const forgetBtn = document.getElementById('forget-btn');
//     const forgetError = document.getElementById('forget-error');
//     const resetBtn = document.getElementById('reset-btn');
//     const resetError = document.getElementById('reset-error');
//     const resetSuccess = document.getElementById('reset-success');

//     let matchedUsername = null; // To store the matched username for reset

//     // Show forget section when "Forgot Password?" is clicked
//     if (forgetLink && forgetSection) {
//         forgetLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             forgetSection.style.display = "block";
//             if (resetSection) resetSection.style.display = "none";
//         });
//     }

//     // Handle forget password submit
//     if (forgetBtn) {
//         forgetBtn.addEventListener('click', function() {
//             const username = document.getElementById('forget-username').value.trim();
//             const email = document.getElementById('forget-email').value.trim();

//             // Get user from localStorage
//             const userData = localStorage.getItem(username);
//             if (!userData) {
//                 forgetError.textContent = "User not found.";
//                 setTimeout(() => { forgetError.textContent = ""; }, 2000);
//                 return;
//             }
//             const user = JSON.parse(userData);

//             // Check email match (make sure you store email during registration)
//             if (user.email && user.email === email) {
//                 // Success: show reset, hide forget
//                 matchedUsername = username;
//                 if (forgetSection) forgetSection.style.display = "none";
//                 if (resetSection) resetSection.style.display = "block";
//             } else {
//                 forgetError.textContent = "Username and email do not match.";
//                 setTimeout(() => { forgetError.textContent = ""; }, 2000);
//             }
//         });
//     }

//     // Handle reset password submit
//     if (resetBtn) {
//         resetBtn.addEventListener('click', function() {
//             const newPassword = document.getElementById('reset-password').value;
//             const confirmPassword = document.getElementById('reset-confirm').value;

//             if (newPassword !== confirmPassword) {
//                 resetError.textContent = "Passwords do not match.";
//                 setTimeout(() => { resetError.textContent = ""; }, 2000);
//                 return;
//             }
//             if (newPassword.length < 6) {
//                 resetError.textContent = "Password must be at least 6 characters.";
//                 setTimeout(() => { resetError.textContent = ""; }, 2000);
//                 return;
//             }
//             // Update password in localStorage
//             if (matchedUsername) {
//                 const userData = localStorage.getItem(matchedUsername);
//                 if (userData) {
//                     const user = JSON.parse(userData);
//                     user.password = newPassword;
//                     localStorage.setItem(matchedUsername, JSON.stringify(user));
//                     // resetSuccess.textContent = "Password reset successful! You can now log in.";
//                     // setTimeout(() => {
//                     //     resetSuccess.textContent = "";
//                     //     window.location.href = "login.html";
//                     // }, 1500);
//                     resetSuccess.textContent = "Password reset successful! Redirecting...";
//                 setTimeout(() => {
//                     resetSuccess.textContent = "";
//                     window.location.href = "welcome.html";
//                 }, 1500);
//                 }
//             }
//         });
//     }
// });
// const changeP = document.getElementById("changing");
// const changePassword = document.getElementById("pass");

// // startButton.addEventListener("click", starQuiz)

// // function starQuiz(){
// //  currentQuestionIndex = 0;
// //  score= 0;
// //  scoreSpan.textContent = 0;
// //  startScreen.classList.remove("active");
// //  quizScreen.classList.add("active");
// //  showQuestion();
// // }

// changeP.addEventListener("click", changeIt)

// function changeIt(){

// }
// const menu = document.querySelector('.menu');
// const nav = document.querySelector('.nav-bar');
// const cancel = document.querySelector('.cancel');
// if(menu){
//  menu.addEventListener("click",()=> {
//   nav.classList.add('active');
//  });

// }
// if(cancel){
//  cancel.addEventListener("click",()=> {
//   nav.classList.remove('active');
//  });

// }

// // window.addEventListener("DOMContentLoaded", function() {
// //     const nav = document.querySelector('.nav-bar');
// //     const menu = document.querySelector('.menu');

// //     document.addEventListener('click', function(event) {
// //         // If nav or menu is not found, do nothing
// //         if (!nav || !menu) return;

// //         // If the click is NOT inside the navbar or the menu icon, close navbar
// //         if (!nav.contains(event.target) && !menu.contains(event.target)) {
// //             nav.classList.remove('active');
// //         }
// //     });

// //     // Optional: open navbar when menu is clicked
// //     if (menu && nav) {
// //         menu.addEventListener('click', function(e) {
// //             nav.classList.add('active');
// //             e.stopPropagation(); // Prevent this click from bubbling up
// //         });
// //     }
// // });

// // window.addEventListener("DOMContentLoaded", function() {
// //     const cart = document.querySelector('.cart-details');
// //     const deleteIcon = document.querySelector('.delete');

// //     document.addEventListener('click', function(event) {
// //         // If nav or menu is not found, do nothing
// //         if (!cart || !deleteIcon) return;

// //         // If the click is NOT inside the navbar or the menu icon, close navbar
// //         if (!cart.contains(event.target) && !deleteIcon.contains(event.target)) {
// //             cart.classList.remove('active');
// //         }
// //     });

// //     // Optional: open navbar when menu is clicked
// //     if (deleteIcon && cart) {
// //         deleteIcon.addEventListener('click', function(e) {
// //             cart.classList.add('active');
// //             e.stopPropagation(); // Prevent this click from bubbling up
// //         });
// //     }
// // });

// window.addEventListener("DOMContentLoaded", function() {
//     // Navbar outside click
//     const nav = document.querySelector('.nav-bar');
//     const menu = document.querySelector('.menu');
//     document.addEventListener('click', function(event) {
//         if (nav && menu && !nav.contains(event.target) && !menu.contains(event.target)) {
//             nav.classList.remove('active');
//         }
//     });

//     // Cart-details outside click
//     const cart = document.querySelector('.cart-detail');
//     const cartIcon = document.querySelector('.bar-shop');
//     if (cart && cartIcon) {
//         document.addEventListener('click', function(event) {
//             if (!cart.contains(event.target) && !cartIcon.contains(event.target)) {
//                 cart.classList.remove('active');
//             }
//         });
//     }

//     // Bar-search outside click
//     const searchForm = document.getElementById("search-full");
//     const barSearch = document.getElementById("bar-search");
//     if (searchForm && barSearch) {
//         document.addEventListener('click', function(event) {
//             if (!searchForm.contains(event.target) && !barSearch.contains(event.target)) {
//                 searchForm.classList.remove('active');
//             }
//         });
//     }
// });
// // window.onscroll = () =>{
// //  nav.classList.remove('active');}

// let searchForm = document.getElementById("search-full");
// document.getElementById("bar-search").onclick = () =>{
//  searchForm.classList.toggle("active");}


// // window.onscroll = () =>{
// //  searchForm.classList.remove('active');}
// const cartIcon = document.querySelector('.bar-shop');
// const cart = document.querySelector('.cart-detail');
// const deleteIcon = document.querySelector('.delete')
// if(menu){
//  cartIcon.addEventListener("click",()=> {
//   cart.classList.add('active');
//  });

// }
// if(deleteIcon){
//  deleteIcon.addEventListener("click",()=> {
//   cart.classList.remove('active');
//  });
// }
//  window.onscroll = () => {
//     if (nav) nav.classList.remove('active');
//     if (searchForm) searchForm.classList.remove('active');
//    if (cart)  cart.classList.remove('active');
// };


// window.addEventListener("DOMContentLoaded", function() {
//     var logBar = document.querySelector(".log-bar");
//     // Get user from localStorage
//     if (window.location.pathname.endsWith("login.html")) {
//         if (logBar) {
//             logBar.innerHTML = '<i class="ri-user-add-line"></i>';
//         }
//         return;
//     }
//     if (window.location.pathname.endsWith("register.html")) {
//         if (logBar) {
//             logBar.innerHTML = '<i class="ri-user-add-line"></i>';
//         }
//         return;
//     }
//     var user = localStorage.getItem("user");
//     if (user) {
//         var parsedUser = JSON.parse(user);
//         var firstLetter = parsedUser.name ? parsedUser.name.charAt(0).toUpperCase() : "";
        
//         if (logBar && firstLetter) {
//             logBar.textContent = firstLetter;
//         }
//     }
// });

//  window.addEventListener("DOMContentLoaded", function() {
//     var userBar = document.getElementById("user-icon");
//     // Get user from localStorage
//     // if (window.location.pathname.endsWith("login.html")) {
//     //     if (logBar) {
//     //         logBar.innerHTML = '<i class="ri-user-add-line"></i>';
//     //     }
//     //     return;
//     // }
//     // if (window.location.pathname.endsWith("register.html")) {
//     //     if (logBar) {
//     //         logBar.innerHTML = '<i class="ri-user-add-line"></i>';
//     //     }
//     //     return;
//     // }
//     var user = localStorage.getItem("user");
//     if (user) {
//         var parsedUser = JSON.parse(user);
//         var firstLetter = parsedUser.name ? parsedUser.name.charAt(0).toUpperCase() : "";
        
//         if (userBar && firstLetter) {
//             userBar.textContent = firstLetter;
//         }
//     }
// });
//   var user = localStorage.getItem("user");
//     if(user){
//         var parsedUser = JSON.parse(user);
//         document.getElementById("welcome-message").innerHTML = `hello ${parsedUser.name}`;
//          document.getElementById("list-option").classList.remove("list-option");
//     }else{
//         document.getElementById("welcome-message").innerHTML = `Welcome <ul class="log-set"> 
//         <li><a href="register.html" >Join Us to Shop with us</a></li>
//         <li><a href="login.html" > login </a></li>
//         </ul>`;
//     }else{
//          document.getElementById("cart-product").innerHTML =`<i class="ri-close-large-line delete"></i>
// <h3 class="head-cart">No Cart</h3>
// <div class="error">
//     <p>login to view ur Cart <a href="login.html">Click here to login</a></p>
// </div>

// <div class="total-product" id="total-product">
//     <p>TOTAL = <span class="result"> $00.00</span></p>
// </div>`;
//     }

//         document.getElementById("logBtn").addEventListener("click", function(){
//         localStorage.removeItem("user");
//         window.location.href = "login.html";
//     });


// // let nav = document.getElementById("navbar");
// // document.getElementById("bar-inside").onclick = () =>{
// //  nav.classList.toggle("active");}


// // window.onscroll = () =>{
// //  nav.classList.remove('active');}


// window.addEventListener("DOMContentLoaded", function() {
//     const changeBtn = document.getElementById("changing");
//     const passSection = document.querySelector(".pass");
//     const heroSection = document.querySelector(".hero");

//     if (changeBtn && passSection && heroSection) {
//         changeBtn.addEventListener("click", function() {
//             passSection.style.display = "block";
//             heroSection.style.display = "none";
//         });
//     }
// });