const myForm = document.querySelector("#myForm");


myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("FirstNameInp").value;
    const lastName = document.getElementById("LastNameInp").value;
    const email = document.getElementById("emailInp").value;
    const subcribe = document.getElementById("subcribe").checked;
    const pass = document.getElementById("pass").value;


    const newuser = {
        firstName,
        lastName,
        email,
        subcribe,
        pass
    };


    const savedusers = localStorage.getItem("users");
    const users = savedusers ? JSON.parse(savedusers) : [];

    if (users.some(user => user.email === email)) {
        alert("יש כבר משתמש עם כתובת המייל הזאת");
         window.location.href = "LogIn.html";
    }


  else{ users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));


window.location.href = "Recipes.html";}

})