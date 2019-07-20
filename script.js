$(document).ready(function(){



    






$(document).on('click', ".btno", function(){

    var apiKey = "gYwXxNDawHfglRSDKhn3ZK9UaIRtSHlc"
    var search = $(this).data('name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key="+apiKey+"&limit=10"



    // console.log(queryURL)

    $.ajax({

        url: queryURL,
        method: 'GET'

    }).then(function(response){

        console.log(response)

        var gif = response.data

        console.log(gif)

        var newDiv = $("<div>");
        var newPara = $('<p>')
        newDiv.addClass('btno');

        for(i=0; i<=gif.length; i++){

            var ratingo = gif[i].rating;

            newPara.text(rating)

        //     $(rating).appendTo(newPara)
        //     $(newPara).appendTo(newDiv)
        //     $('.placeholder').append(gif[i].rating)
        }



    })


})





})