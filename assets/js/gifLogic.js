$(".actor-container").on("click", ".actor-btn", function () {

    var actor = $(this).data("name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        actor + "&api_key=LcirIgJ4UU8ijrKBSi5jNsUEhqc9QrZN&limit=10";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function (response) {
            displayGifs(response);
        });
});

function displayGifs(response) {

    var actorContainer = $(".gif-container");
    var results = response.data;

    results.forEach(function(element) {
        
        let gifDiv = $("<div class='gifDiv'>");
        let gifImg = $("<img class='gifImg'>");

        gifImg.attr({
            src: element.images.fixed_width_still.url,
            alt: element.title,
            'data-still': element.images.fixed_width_still.url,
            'data-animate': element.images.fixed_width.url,
            'data-state': 'still'
        })

        gifDiv.append(gifImg);
        actorContainer.append(gifDiv);
    });

}

$(".gif-container").on("click", ".gifImg", function () {

    var dataState = $(this).attr("data-state")

    if(dataState === "still"){
        $(this).attr('data-state', 'animate');
        $(this).attr('src', $(this).attr('data-animate'));

        // $(this).attr({
        //     'data-state': 'animate',
        //     src: $(this).attr('data-animate')
        // })
    } else {
        // $(this).attr({
        //     'data-state': 'still',
        //     src: $(this).attr('data-still')
        // });

        $(this).attr('data-state', 'still');
        $(this).attr('src', $(this).attr('data-still'));
    }
});