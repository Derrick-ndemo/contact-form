const form = document.getElementById("form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const support = document.querySelector("#support");
const general = document.querySelector("#general");
const messageInput = document.querySelector("#message-input");
const query = document.getElementsByClassName("query");
const terms = document.getElementById("terms");
const paras = document.querySelectorAll("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate();
});

function validate() {
    clearErrors();

    let isValid = true;

    // firstName and lastname validation
    if (firstName.value.trim() === "" || lastName.value.trim() === "") {
        setError(firstName, "This field is required!");
        setError(lastName, "This field is required!");
        isValid = false;
    } else if (
        firstName.value.length < 3 ||
        firstName.value.length > 15 ||
        lastName.value.length < 3 ||
        lastName.value.length > 15
    ) {
        setError(firstName, "Length must be > 2 and < 15");
        setError(lastName, "Length must be > 2 and < 15");
        isValid = false;
    }

    // email
    if (email.value.trim() === "") {
        setError(email, "This field is required!");
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        setError(email, "Invalid Email format");
        isValid = false;
    }

    // textarea
    if (messageInput.value.trim() === "") {
        setError(messageInput, "This field is required!");
        isValid = false;
    }

    // query
    if (!support.checked && !general.checked) {
        setError(support, "This field is required!");
        setError(general, "This field is required!");
        isValid = false;
    }

    // terms
    if (!terms.checked) {
        setError(terms, "This field is required!");
        isValid = false;
    }

    if (isValid) {
        // Submit the form or perform other actions here
        console.log("Form is valid and ready to be submitted.");
    }
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setError(element, msg) {
    const parent = element.parentElement;
    const errorPara = parent.querySelector("p.error");
    parent.classList.add("error");
    errorPara.textContent = msg;
}

function clearErrors() {
    const errorParas = document.querySelectorAll("p.error");
    errorParas.forEach(para => {
        para.textContent = "";
        para.parentElement.classList.remove("error");
    });
}