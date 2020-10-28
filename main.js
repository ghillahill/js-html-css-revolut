$(document).ready(function () {

    //Abilito e disabilito dropdown-menu-one con mouseenter e mouseleave

    $('.dropdown-one a').mouseenter(function() {
        $('.dropdown-menu-one').addClass('active');
    });

    $('.dropdown-one').mouseleave(function() {
        $('.dropdown-menu-one').removeClass('active');
    });

    //Abilito e disabilito dropdown-menu-two con mouseenter e mouseleave

    $('.dropdown-two a').mouseenter(function() {
        $('.dropdown-menu-two').addClass('active');
    });

    $('.dropdown-two').mouseleave(function() {
        $('.dropdown-menu-two').removeClass('active');
    });

    //Abilito e disabilito dropdown-menu-three con click

    $('.dropdown-three a').click(function() {
        $('.dropdown-menu-three').toggleClass('active');
    });

    //Abilito e disabilito dropdown-menu-four con click

    $('.dropdown-four a').click(function() {
        $('.dropdown-menu-four').toggleClass('active');
    });

});
