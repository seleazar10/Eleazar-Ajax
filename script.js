
var emotionInputArr = ['Happy', 'Sad']

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

        for (i=0; i<newData.length; i++){
            
        

        
            var para = $('<p>').text("Rating: " + newData[i].rating)
            newDiv.append(para)


            var img = $('<img class="pico">').attr('src', newData[i].images.fixed_height.url)
            // newDiv.append(img)
          
            newDiv.append(img)



            $('.placeholder').prepend(newDiv)

        }



    })

}

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

    $('#btnsub').on('click', function(event) {

        event.preventDefault()

        var btnd = $('#adder').val().trim()

        emotionInputArr.push(btnd)

        buttonDisplay()


    })

    buttonDisplay()



$(document).on('click', '.btn', displayEmotion)




