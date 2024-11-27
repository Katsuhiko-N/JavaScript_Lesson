$(function(){
    $('.bg1').on('click', function(){
        $('.bg1').slideUp()
    })
    $('.box').mouseout(function(){
        $('.bg1').slideDown()
    })
});
