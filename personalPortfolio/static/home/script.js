$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu script 
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    if ($(".navbar ul").hasClass('active')) {
        console.log("class active");
        $('.menu li a').click(function() {
            console.log("clicked");
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("active");
        })
    }

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    var typed = new Typed(".typing", {
        strings: ["Vangala Abhyuday", "a Web Developer"],
        typeSpeed: 90,
        backSpeed: 100,
        loop: true
    });


});



// honeydue,lavender aliceblue lightcyan