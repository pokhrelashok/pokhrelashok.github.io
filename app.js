const hamburgerMenu = document.querySelector("#navigation .nav-icon");
const navContent = document.querySelector("#nav-content");
const closeBtn = document.querySelector("#nav-content .close-btn");
const navLinks = document.querySelectorAll("#nav-content nav ul li a");
const scrollTop = document.querySelector('.scroll-top');


if (scrollTop) {
  window.addEventListener('scroll', function () {
    if (pageYOffset > (window.innerHeight * 1.2)) {
      scrollTop.style.display = "flex";
    } else {
      scrollTop.style.display = "none";
    }
  });
  scrollTop.addEventListener('click', function () {
    window.scrollTo(0, 0)
  })
}

hamburgerMenu.addEventListener("click", function () {
  navContent.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", function () {
  navContent.classList.remove("show");
  document.body.style.overflow = "initial";
});


navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navContent.classList.remove("show");
    document.body.style.overflow = "initial";
  });
});

document.querySelector("#contact-form").addEventListener('submit', function (e) {
  e.preventDefault()
  document.querySelector("#contact-submit").disabled = true
  document.querySelector("#contact-submit").innerText = "Sending"
  // eslint-disable-next-line no-undef
  emailjs.send("service_oty59ig", "template_b8dhgue", {
    from_name: document.querySelector("#contact-name").value,
    to_name: "Ashok Pahadi",
    message: document.querySelector("#contact-message").value,
    reply_to: document.querySelector("#contact-email").value,
  }).then(res => {
    console.log(res)
  }).finally(() => {
    // document.querySelector("#contact-submit").disabled=false
    document.querySelector("#contact-submit").innerText = "Sent"
    alert("Your message has been delivered. I will get back to you shortly. Thank you!");
    document.querySelector("#contact-name").value = ""
    document.querySelector("#contact-message").value = ""
    document.querySelector("#contact-email").value = ""
    document.querySelector("#contact-submit").disabled = false
  })
})

const flashElements = document.querySelectorAll('.quote-section');
let currentReview = 0;
setInterval(() => {
  flashElements[currentReview].style.display = "none";
  currentReview = (currentReview + 1) % flashElements.length
  flashElements[currentReview].style.display = "block";
}, 4000)
