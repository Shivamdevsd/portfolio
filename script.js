document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact_form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs.sendForm('service_qhk7j0e', 'template_6875qm9', form)
      .then(() => {
        alert("Message sent!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send.");
      });
  });
});
