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

    // Autoplay the slider
    setInterval(nextSlide, 5000); // Change the interval as needed

    // You can add event listeners for next and previous buttons if needed
    const prevBtn = document.querySelector('.prev-slide-btn');
    const nextBtn = document.querySelector('.next-slide-btn');

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});

// Add this JavaScript for FAQs
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
