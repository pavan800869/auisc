document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newTransformValue = -currentIndex * (100 / totalSlides) + '%';
        document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 4000); 


    const prevBtn = document.querySelector('.prev-slide-btn');
    const nextBtn = document.querySelector('.next-slide-btn');

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});


document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq');

    faqItems.forEach(function (faq) {
        const question = faq.querySelector('.question');
        const answer = faq.querySelector('.answer');

        question.addEventListener('click', function () {
            faq.classList.toggle('active');
            if (faq.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});


// countdown for aunsf2.0
var countDownDate = new Date("June 18, 2024 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

/*Monthly Events start*/

$('#carousel-1').carousel({
    interval: 4000,
    wrap: true,
    keyboard: true
});


/* 2 carousel */
$('#carousel-2').carousel({
    interval: 6000,
    wrap: true,
    keyboard: true
});


/* 3 carousel */
$('#carousel-3').carousel({
   interval: 8000,
   wrap: true,
   keyboard: true
});

/* 4 carousel example with jumbotron */
$('#carousel-4').carousel({
   interval: 10000,
   wrap: true,
   keyboard: true
});

/*Monthly Events end*/

var countDownDate = new Date("June 19, 2024 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


function toggleAnswer(faqBox) {
    const answer = faqBox.querySelector('.faq-answer');
    const allAnswers = document.querySelectorAll('.faq-answer');

    allAnswers.forEach((ans) => {
        if (ans !== answer) {
            ans.style.display = 'none';
        }
    });

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}


// Close the dropdown if the user clicks outside of it
