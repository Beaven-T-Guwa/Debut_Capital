window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body');
     
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');

        if(menu_btn.classList.contains('is-active')){
            body.classList.add('no-scroll'); 
        }
        else{
            body.classList.remove('no-scroll');
        }
        
    })

    // -----------------SLICK SLIDER--------------
    $('.ethels').slick({
        prevArrow:'<i class="fas fa-arrow-left fa-3x left-arrow">',
        nextArrow:'<i class="fas fa-arrow-right fa-3x right-arrow">',
    });
}