$(document).ready(function(){

    $('.home').addClass('show');

    $(".navbar").on('click', 'button', function(){
        $('.bodyContent').removeClass('show')
        if ($(this).hasClass('homeButton')) {
            $('.home').addClass('show');
        } else if ($(this).hasClass('menuButton')) {
            $('.menu').addClass('show');
        } else if ($(this).hasClass('reservationsButton')) {
            $('.reservations').addClass('show');
        } else {
            $('.location').addClass('show');
        }
    })

})