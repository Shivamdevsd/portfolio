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

document.getElementById('header1').addEventListener('click', () => toggleProject('body1'));
document.getElementById('header2').addEventListener('click', () => toggleProject('body2'));
document.getElementById('header3').addEventListener('click', () => toggleProject('body3'));

function toggleProject(bodyId) {
  const body = document.getElementById(bodyId);

  if (body.style.display === 'flex') {
     gsap.to(body, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        body.style.display = 'none';
      }
    });
  }else{
    body.style.display = 'flex'; 
  gsap.fromTo(body,
    { height: 0, opacity: 0 },
    {
      height: body.scrollHeight,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        body.style.height = 'auto'; 
      }
    }
  );
  }
}

function toggleclose() {
  const arrow = event.currentTarget;
  const body = arrow.closest('.project-body-card');

  if (body) {
    gsap.to(body, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        body.style.display = 'none';
      }
    });
  }
}



