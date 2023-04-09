window.addEventListener('load', () => { 
    const observe = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
         });
    });

    const hidden = document.querySelectorAll('.Hidden');
    hidden.forEach((el) => observe.observe(el));

    const hiddenel = document.querySelectorAll('.text-Trans');
    hiddenel.forEach((el) => observe.observe(el));

    const hiddenel1 = document.querySelectorAll('.transwidg');
    hiddenel1.forEach((el) => observe.observe(el));
    
    const hiddenel2 = document.querySelectorAll('.img-container');
    hiddenel2.forEach((el) => observe.observe(el));

    const hiddenel3 = document.querySelectorAll('.gross1');
    hiddenel3.forEach((el) => observe.observe(el));

    const hiddenel4 = document.querySelectorAll('.gross2');
    hiddenel4.forEach((el) => observe.observe(el));

    const hiddenel5 = document.querySelectorAll('.gross3');
    hiddenel5.forEach((el) => observe.observe(el));

    
    const hiddenlist = document.querySelectorAll('list');
    hiddenlist.forEach((el) => observe.observe(el));

    //slider
    const slideContainer = document.querySelector('.slide')
    const slides = Array.from(document.querySelectorAll('.success-card-fl'));
    const prevBtn = document.querySelector(".prevbtn");
    const nextBtn = document.querySelector(".nextbtn");
    const cardWidth = slideContainer.querySelector('.success-card-fl').clientWidth;

    let conSlideIndex = 0;

    const showHiddenIcon = () => {
        if (slideContainer.scrollLeft == 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
        }
    }

    function moveSliderLeft() {
        if (conSlideIndex > 0) {
            conSlideIndex--;
            slideContainer.style.transform = 'translateX(-${conSlideIndex * cardWidth * 3}px)';
            const slider = document.querySelector(".swiper");
            slider.scrollBy(-1260, 0);
            showHiddenIcon();
        }
    }

    function moveSliderRight() {
        if (conSlideIndex < slideContainer.children.length / 3 - 1) {
            conSlideIndex++;
            slideContainer.style.transform = 'translateX(-${conSlideIndex * cardWidth * 3}px)';

            const slider = document.querySelector(".swiper");
            slider.scrollBy(1270, 0);
            nextBtn.classList.add("transition");
        }
   }

   prevBtn.addEventListener("click", moveSliderLeft);
   nextBtn.addEventListener("click", moveSliderRight);
});