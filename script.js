// Navbar scroll effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

// Smooth scrolling for anchor links
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 70,
    },
    500,
    "linear"
  );
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500, "linear");
  return false;
});

// Animation on scroll
$(document).ready(function () {
  $(".feature-card").each(function () {
    $(this).hover(
      function () {
        $(this).addClass("animate__pulse");
      },
      function () {
        $(this).removeClass("animate__pulse");
      }
    );
  });
});

// wp form submit
function sendToWhatsApp() {
  // Get form values
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const phone = document.getElementById("userPhone").value;
  const insurance = document.getElementById("insuranceType").value;
  const message = document.getElementById("userMessage").value;

  // Basic validation (can be more robust)
  if (!name || !email || !phone || !insurance || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Your WhatsApp number with country code (e.g., +91 for India)
  const whatsappNumber = "+919000299910"; // Replace with the actual WhatsApp number

  // Construct the message
  let whatsappMessage = `
            *New Enquiry from Website*
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Insurance Type: ${insurance}
            Message: ${message}
            `.trim(); // .trim() removes leading/trailing whitespace

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Construct the WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab/window
  window.open(whatsappURL, "_blank");
}

// Form submission
$("#contactForm").submit(function (e) {
  e.preventDefault();
  alert("Thank you for your request! We will contact you shortly.");
  this.reset();
});

// Show/hide back-to-top button on scroll
window.addEventListener("scroll", function () {
  const btn = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Smooth scroll to top on click
document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
