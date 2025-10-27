const scriptURL = 'https://script.google.com/macros/s/AKfycbwQyVs0yOWuAo4V2Q2eClSR0VtRusg7S4xTlpATdWCS_aGekK9r8NJ-dXBMg6oJyEn1/exec'; // your exact URL

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    console.error('Error!', error);
    alert('There was an error submitting your message.');
  });
});
