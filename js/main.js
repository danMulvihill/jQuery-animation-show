console.log("Working!");

//native way:
// document.addEventListener("DOMContentLoad", function(){
// });

//jQuery way:
$(document).ready(function(){

    console.log("doc is ready. Thanks jQuery!");

    function bake(){
        console.log("bake!");
    }

    function preHeatOven(callback){
        // setTimeout(function(){
        //     console.log("preheating...");
        // }, 3000);

        console.log("Oven is pre-heated");
        callback();
    }

    preHeatOven(bake);
    

    var myTitle = $("#title")[0];
    myTitle.innerText = "Foo Bar";

    $("#title").html("Foo jQuery")

    //$("#title").hide();

    $("#sub-title").html("Subtitle");


    $('ul.js-links a').on('click', function(e){
        console.log("You just clicked: ", e, this);
        $(this).fadeOut(700)
    })


    function showDone(){
        console.log("all done");
        $("div#square").animate({
            width: "50%",
            opacity: .9
        }, 5000, function(){ $("#sub-title").html("That was quick!");});
    
       
    }

    $(".js-heading").show(showDone);

}); //closes document ready