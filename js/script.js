const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText) {
        dynamicText.textContent = 'Building thoughtful, responsive experiences for modern brands.';
    }

    const changeButton = document.getElementById('changeTextButton');
    if (changeButton && dynamicText) {
        changeButton.addEventListener('click', () => {
            dynamicText.textContent = 'Thanks for stopping by! Let us create something beautiful together.';
        });
    }

    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (form && status) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || name.length < 2) {
                setStatus('Please enter your full name.', false);
                return;
            }

            if (!EMAIL_PATTERN.test(email)) {
                setStatus('Please enter a valid email address.', false);
                return;
            }

            if (!message || message.length < 10) {
                setStatus('Please share a few details about your project.', false);
                return;
            }

            setStatus('Thanks! Your message is ready to be sent. I will reply within 1-2 business days.', true);
            form.reset();
        });
    }

    function setStatus(message, isSuccess) {
        status.textContent = message;
        status.classList.toggle('success', isSuccess);
    }
});
