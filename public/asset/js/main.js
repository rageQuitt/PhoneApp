'use strict'
console.log('main.js is loaded');

//Formulaire drapeau

var input = document.querySelector("#phone-number");
window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

//Captcha
async function validateCaptcha(captchaResponse) {
    const response = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'response': captchaResponse,  // the 'h-captcha-response' value
        })
    });

    const captchaValidation = await response.json();
    if (!captchaValidation.success) {
        // handle the failed validation
        console.error("Captcha validation failed");
    }
}

// You would call validateCaptcha with the captcha response value when the form is submitted
// validateCaptcha(someCaptchaResponseValue);
