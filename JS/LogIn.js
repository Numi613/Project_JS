const myForm = document.querySelector("#myForm");


myForm.addEventListener("submit", function (event) {
    event.preventDefault();


    const email = document.getElementById("emailInp").value;
    const subcribe = document.getElementById("subcribe").checked;
    const pass = document.getElementById("pass").value;

    const formData = {
        email,
        subcribe,
        pass
    };



    const savedusers = localStorage.getItem("users");
    const users = JSON.parse(savedusers);

    if (!users.some(user => user.email === email) ) {
        alert("לא קיים משתמש במערכת. נא להירשם קודם.");
        window.location.href = "signin.html";

    }

     else {
        
        if (!users.some(user => user.email === email && user.pass === pass)) {
        alert("מייל או סיסמה שגויים.");
        return;
    }

    users.push(formData)
    localStorage.setItem("users", JSON.stringify(users));


window.location.href = "Recipes.html";}


})


