
var emotionInputArr = []

$('.buttonAlert').hide()

//
function buttonDisplay() {
    $('#buttonsAll').empty();
    for (var i = 0; i < emotionInputArr.length; i++) {
        var btnz = $('<button>')
        btnz.addClass('btn btn-primary mr-2')
        btnz.attr('data-name', emotionInputArr[i]);
        btnz.text(emotionInputArr[i])
        $('#buttonsAll').append(btnz)


    }
}



//
$('#btnsub').on('click', function (event) {

    event.preventDefault()

    var btnd = $('#adder').val().trim()

    emotionInputArr.push(btnd)

    buttonDisplay()

    $('#adder').val("")

    $('.buttonAlert').toggle()


})

function displayEmotion() {

    var apiKey = "gYwXxNDawHfglRSDKhn3ZK9UaIRtSHlc"
    var search = $(this).attr('data-name')
    console.log(search)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=" + apiKey + "&limit=10"



    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {


        var newDiv = $('<div class="pics ">');

        console.log(response)
        var newData = response.data
        console.log(newData.length)


        for (i = 0; i < newData.length; i++) {

            var allGif = $("<img class='pico'>")
            allGif.attr("src", newData[i].images.fixed_height_still.url)
            allGif.attr("data-still", newData[i].images.fixed_height_still.url);
            allGif.attr("data-animate", newData[i].images.fixed_height.url);
            allGif.attr("data-state", "still");
            allGif.addClass("gifMove");



            $('.placeholder').prepend("<p>Rating: " + newData[i].rating + "</p>")
            $('.placeholder').prepend(allGif)

        }



        })


    }



buttonDisplay()



$(document).on('click', '.btn', displayEmotion)

$(document).on('click', '.gifMove', function () {
    console.log('click')

    var imgState = $(this).attr('data-state');

    var still = $(this).attr('data-still')

    var animate = $(this).attr('data-animate')




    if (imgState === 'still') {
        $(this).attr('src', animate)
        $(this).attr('data-state', 'animate')
    } else {
        $(this).attr('src', still);
        $(this).attr('data-state', 'still');

    }






})









