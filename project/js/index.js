$(document).ready(function () {
    //Makes the main picture smaller on hover       
    $("#pic").hover(function () {
        $("#pic").animate({
            width: '850px',
            height: '500px'
        });
    });
    //Changes the album covers to grayscale on hover
    $('#album1').hover(function () {
        $('#album1').toggleClass('album1 newAlbum1');
    });

    $('#album2').hover(function () {
        $('#album2').toggleClass('album2 newAlbum2');
    });

    $('#album3').hover(function () {
        $('#album3').toggleClass('album3 newAlbum3');
    });

    $('#album4').hover(function () {
        $('#album4').toggleClass('album1 newAlbum4');
    });
    //changes the artist pictures sepia on hover
    $('#image1').hover(function () {
        $('#image1').toggleClass('image1 newImage1');
    });

    $('#image2').hover(function () {
        $('#image2').toggleClass('image2 newImage2');
    });

    $('#image3').hover(function () {
        $('#image3').toggleClass('image3 newImage3');
    });

    $('#image4').hover(function () {
        $('#image4').toggleClass('image4 newImage4');
    });
    //changes the color of the submit button text
    $('#submit').click(function () {
        $('#submit').toggleClass('new-submit old-submit');
    });
    //changes the paragraph text to black background
    $("p").mouseover(function () {
        $("p").css("background-color", "black");
    });
    //Stores the comment in  var text and displays it below
    $('#submit').click(function () {
        var text = $('#comment').val();
        $('#display').append(text);
    });
    //changes the main picture on mouse over
    $('#pic').hover(function () {
        $(this).attr('src', 'img/gch.jpg');
    }, function () {
        $(this).attr('src', 'img/gym-class-heroes.jpg');
    });

});
