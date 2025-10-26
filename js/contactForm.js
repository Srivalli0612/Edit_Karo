const scriptURL = 'https://script.google.com/macros/s/AKfycbz9Ktk1qWdbumAP6ireOVFmeZY1f5iA1Gp96yrFAO00uokZNbNnt_EgVHSAu-D39qZf/exec'; // your exact URL

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
