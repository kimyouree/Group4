$(document).ready(function () {
    //changes the hockey player picture into a real hockey player
    $('#hockey').hover(function () {
        $(this).attr('src', 'img/hockey1.jpg');
    }, function () {
        $(this).attr('src', 'img/hockey.jpg');
    });
});