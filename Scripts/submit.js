
const signInForm = document.querySelector("form");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (signInForm.id === "password-reset-form") {
        Swal.fire({
            icon: "success",
            title: "Reset link sent",
            text: "Check your email for a link to reset your password.",
            confirmButtonText: "OK",
            confirmButtonColor: "#8d0300",
            background: "#2a2a2a",
            color: "#ffffff"
        });
        return;
    }

    if (signInForm.id === "register-form") {
        Swal.fire({
            icon: "error",
            title: "Account already exists",
            text: "An account with this email address already exists.",
            confirmButtonText: "OK",
            confirmButtonColor: "#8d0300",
            background: "#2a2a2a",
            color: "#ffffff"
        });
        return;
    }


    Swal.fire({
        icon: "error",
        title: "Wrong email or password",
        text: "Please check your credentials and try again.",
        confirmButtonText: "Try again",
        confirmButtonColor: "#8d0300",
        background: "#2a2a2a",
        color: "#ffffff",
        iconColor: "#ffb4ab"
    });
});