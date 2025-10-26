document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("formMessage");

  if (!email) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Submitting...";
  message.style.color = "#aaa";

  const scriptURL = "https://script.google.com/macros/s/AKfycbz_jwQEMtBzwpouyncl1T6fjZKvtIABcAZAhA0lHDuxSZnE_iw8HNMubWgupFrjkcjo/exec";

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.result === "success") {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "#00ff7f";
        document.getElementById("emailInput").value = "";
      } else {
        message.textContent = "Something went wrong. Please try again.";
        message.style.color = "red";
      }
    })
    .catch(() => {
      message.textContent = "Network error. Please try again.";
      message.style.color = "red";
    });
});
