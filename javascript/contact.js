// Validation and Regular Expression //
function validation(formInput, messageOutput) {
  const form = document.querySelector(formInput);
  const message = document.querySelector(messageOutput);
  const namePattern = /^[a-zA-Z]{2,12}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

// Display Error Message 
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="fname"]').value;
    const email = form.querySelector('[name="email"]').value;
    const date = form.querySelector('[name="date"]').value;

    if (!namePattern.test(name)) {
      message.textContent = 'Please enter a name that contain 2–12 characters';
      return;
    }
    if (!emailPattern.test(email)) {
      message.textContent = 'Please enter a vaild email';
      return;
    }
    if (!datePattern.test(date)) {
      message.textContent = 'Please select a valid date';
      return;
    }

    summaryDisplay()
    
  });
}

// Output for Forms 
validation('.contact-form', 'contact-group');
