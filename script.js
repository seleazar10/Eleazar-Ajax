
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


        var newDiv = $('<div class="pics">');



        console.log(response)

        var newData = response.data

        console.log(newData)

        
            var para = $('<p>').text("Rating: " + newData[i].rating)
            newDiv.append(para)


            var img = $('<img>').attr('src', newData[i].images.fixed_height.url)
            newDiv.append(img)



            $('.placeholder').prepend(newDiv)



    })

    function buttonDisplay() {
        $('#buttonsAll').empty()

        for (var i = 0; i < emotionInputArr.length; i++) {
            var btnz = $('<button>')
            btnz.addClass('btn btn-primary mr-2')
            btnz.attr('data-name', emotionInputArr[i]);
            btnz.text(emotionInputArr[i])



            $('#buttonsAll').append(btnz)


        }
    }

    $('.btnsub').on('click', function(event) {

        event.preventDefault()

        var adder = $('#btno').val().trim()

        emotionInputArr.push(adder)


    })






}

displayEmotion()

// $('button').on('click', function(event){
//     event.preventDefault()
//     // displayEmotion
// })








// $(document).ready(function(){










// $(document).on('click', ".btno", function(){

//     var apiKey = "gYwXxNDawHfglRSDKhn3ZK9UaIRtSHlc"
//     var search = $(this).data('name')
//     console.log(search)
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     search + "&api_key="+apiKey+"&limit=10"

//     // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     //         search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"




//     // console.log(queryURL)

//     $.ajax({

//         url: queryURL,
//         method: 'GET'

//     }).then(function(response){

//         console.log(response)

//         var gif = response.data

//         console.log(gif)

//         // var newDiv = $("<div>");

//         console.log(gif.length)

//         for(var i=0; i<gif.length; i++){

//             //new para

//             var newPara = $('<p>');

//             newPara.text(gif[i].rating)

//             $('.imagos').append(newPara)

//             var newImg = $('<img>')
//             newImg.attr('src', gif[i].images.fixed_height.url)
//             $('.imagos').append(newImg)






//         }



//     })


// })





// })