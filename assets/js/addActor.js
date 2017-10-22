$("#addActor-btn").on("click", function(){
    
    var input = $("#user-input").val();

    $("#user-input").val("");

    actors.arr.push(input);

    actorLoad();

});