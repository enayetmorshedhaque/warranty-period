// register and login link
var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');

// register and login section
var registerSection = document.getElementById('register');
var loginSection = document.getElementById('login');

// replace registration form with login form
loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    registerSection.style.display = "none";
    loginSection.style.display = "block";
});

// replace login form with registration form
registerLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginSection.style.display = "none";
    registerSection.style.display = "block";
});

// handling page reload
// var registrationForm = document.getElementById("registrationForm");
// function handleForm(event) { event.preventDefault(); } 
// registrationForm.addEventListener('submit', handleForm);

// input fields validation

// company name input validation
var companyNameValue = document.getElementById('companyName');
companyNameValue.addEventListener("blur", function () {
    if (companyNameValue.value == '') {
        document.getElementById("companyName").style.border = "1px solid red";
    } else {
        document.getElementById("companyName").style.border = "1px solid green";
    }
});

// registration email validation
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var registrationEmailValue = document.getElementById('registrationEmail');
registrationEmailValue.addEventListener("blur", function () {
    if (registrationEmailValue.value.match(validRegex)) {
        document.getElementById("registrationEmail").style.border = "1px solid green";
    } else {
        document.getElementById("registrationEmail").style.border = "1px solid red";
    }
});

// registration password input validation
var registrationPasswordValue = document.getElementById('registrationPassword');
registrationPasswordValue.addEventListener("blur", function () {
    if (registrationPasswordValue.value == '') {
        document.getElementById("registrationPassword").style.border = "1px solid red";
    } else {
        document.getElementById("registrationPassword").style.border = "1px solid green";
    }
});

// login email validation
var loginEmailValue = document.getElementById('loginEmail');
loginEmailValue.addEventListener("blur", function () {
    if (loginEmailValue.value.match(validRegex)) {
        document.getElementById("loginEmail").style.border = "1px solid green";
    } else {
        document.getElementById("loginEmail").style.border = "1px solid red";
    }
});

// login password input validation
var loginPasswordValue = document.getElementById('loginPassword');
loginPasswordValue.addEventListener("blur", function () {
    if (loginPasswordValue.value == '') {
        document.getElementById("loginPassword").style.border = "1px solid red";
    } else {
        document.getElementById("loginPassword").style.border = "1px solid green";
    }
});

// warranty company name input validation
var warrantyCompanyNameValue = document.getElementById('warrantyCompanyName');
warrantyCompanyNameValue.addEventListener("blur", function () {
    if (warrantyCompanyNameValue.value == '') {
        document.getElementById("warrantyCompanyName").style.border = "1px solid red";
    } else {
        document.getElementById("warrantyCompanyName").style.border = "1px solid green";
    }
});

// company name input validation
var productBrandValue = document.getElementById('productBrand');
productBrandValue.addEventListener("blur", function () {
    if (productBrandValue.value == '') {
        document.getElementById("productBrand").style.border = "1px solid red";
    } else {
        document.getElementById("productBrand").style.border = "1px solid green";
    }
});

// company name input validation
var productCategoryValue = document.getElementById('productCategory');
productCategoryValue.addEventListener("blur", function () {
    if (productCategoryValue.value == '') {
        document.getElementById("productCategory").style.border = "1px solid red";
    } else {
        document.getElementById("productCategory").style.border = "1px solid green";
    }
});

// company name input validation
var purchaseDateValue = document.getElementById('purchaseDate');
purchaseDateValue.addEventListener("blur", function () {
    if (purchaseDateValue.value == '') {
        document.getElementById("purchaseDate").style.border = "1px solid red";
    } else {
        document.getElementById("purchaseDate").style.border = "1px solid green";
    }
});

// company name input validation
var warrantyDurationValue = document.getElementById('warrantyDuration');
warrantyDurationValue.addEventListener("blur", function () {
    if (warrantyDurationValue.value == '') {
        document.getElementById("warrantyDuration").style.border = "1px solid red";
    } else {
        document.getElementById("warrantyDuration").style.border = "1px solid green";
    }
});

// company name input validation
var warrantyUnitValue = document.getElementById('warrantyUnit');
warrantyUnitValue.addEventListener("blur", function () {
    if (warrantyUnitValue.value == '') {
        document.getElementById("warrantyUnit").style.border = "1px solid red";
    } else {
        document.getElementById("warrantyUnit").style.border = "1px solid green";
    }
});

