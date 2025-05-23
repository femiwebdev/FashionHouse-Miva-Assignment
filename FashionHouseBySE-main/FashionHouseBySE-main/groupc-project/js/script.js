inquiriesForm = document.getElementById("inquiriesForm");
if (inquiriesForm) {
    inquiriesForm.onsubmit = (e) => {
        e.preventDefault();
        alert("Form successfully submitted");

        const inputs = document.querySelectorAll(
            "input.customInput, textarea.customInput"
        );
        inputs.forEach((input) => {
            input.value = "";
        });
    };
}

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById("emailInput");
        input.value = "";
        alert("Successfully subscribed to our newsletter");
    };
}
