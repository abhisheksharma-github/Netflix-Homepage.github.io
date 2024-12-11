document.addEventListener("DOMContentLoaded", () => {
  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const getStartedButton = document.getElementById("get-started");

  getStartedButton.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();
    if (!validateEmail(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
      alert("Thank you for signing up!");
    }
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // FAQ toggle functionality
  const faqBoxes = document.querySelectorAll(".faqbox");
  faqBoxes.forEach((box) => {
    const toggle = box.querySelector(".faq-toggle");
    const answer = box.querySelector(".faq-answer");

    toggle.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navButtons = document.querySelector(".nav-buttons");

  menuToggle.addEventListener("click", () => {
    navButtons.classList.toggle("active");
  });
});
