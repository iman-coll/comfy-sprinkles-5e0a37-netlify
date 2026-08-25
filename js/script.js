document.addEventListener("DOMContentLoaded", () => {
  // Close the Bootstrap mobile menu after clicking a navigation link.
  const navbar = document.getElementById("navbarSupportedContent");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar && navbar.classList.contains("show") && window.bootstrap) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);
        collapse.hide();
      }
    });
  });

  // Prevent placeholder project links from jumping to the top of the page.
  document.querySelectorAll(".demo-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  });

  // Simple client-side contact form validation.
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        status.textContent = "Please complete all required fields correctly.";
        status.className = "small text-center text-danger";
        return;
      }

      status.textContent = "Thanks! Your message is ready to be connected to a form service.";
      status.className = "small text-center text-success";
      form.reset();
      form.classList.remove("was-validated");
    });
  }
});
