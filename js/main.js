
//native way:
// document.addEventListener("DOMContentLoad", function(){
// });

//jQuery way:
$(document).ready(function(){

    console.log("doc is ready. Thanks jQuery!");


    $('ul.js-list a').on('click', function(e){
        $(this).html("Fadding Away. Bye, bye!");
        $(this).fadeOut(1700)
    })

    $('#action-button').on("click", startShow)

    function startShow(){
        
        $("div#square").animate({
            width: "50%",
            opacity: .9
        }, 5000, changeSubtitle);   
    }

    function changeSubtitle(){
        $("#sub-title").html("That was quick!");
        setTimeout(function(){
            $(".js-heading").html("It's not over...")
        },1000);
        setTimeout(showPart2, 2500)   
    }

    function showPart2(){
        $("ul").animate({
            opacity: 1.0
        },2000, function(){ $(".js-heading").html("Now it's over. Wasn't that great?")});
        $("ul li").animate({
            padding: "70px"
        },3000) 
    }
    

    $(".js-heading").show();

}); //closes document ready