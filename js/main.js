function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else if (!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Message sent! Thank you for contacting Moodify.");
    document.getElementById("contactForm").reset();
  }
}
