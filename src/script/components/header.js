$(function () {
    const heaNav = $('.hea_nav');
    const heaLogo = ($('.hea_logo-wrapper'));
    const offsetTop = heaNav[0].offsetTop;
    $(this).scroll(function () {
        const { top } = heaNav[0].getBoundingClientRect();
        const { bottom } = heaLogo[0].getBoundingClientRect();
        top <= 0 && heaNav.addClass('fixed')
        bottom >= 0 && heaNav.removeClass('fixed')
    })
})