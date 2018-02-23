
//native way:
// document.addEventListener("DOMContentLoad", function(){
// });

//jQuery way:
$(document).ready(function(){

    console.log("doc is ready. Thanks jQuery!");


    // $('ul.js-list a').on('click', function(e){
    //     $(this).html("Fadding Away. Bye, bye!");
    //     $(this).fadeOut(1700)
    // })

    $('#action-button').on("click", startShow)

    function startShow(){
        
        $("div#square").animate({
            width: "23%",
            opacity: .9
        }, 5000, changeSubtitle); 
        $("#action-button").text("The Show ...")
    }

    function changeSubtitle(){
        
        $("#sub-title").html("That was quick!");
        setTimeout(function(){
            $(".js-heading").css("visibility", "visible");
            $(".js-heading").html("It's not over...");
        },1000);
        setTimeout(showPart2, 2500)   
    }

    function showPart2(){
        $("div#square").animate({width: "100%"},3000);
        $("#j").animate({ left: "0"},1000);
        $("#Q").animate({ left: "0"},3000);
        $("#u").animate({ left: "0"},6000);
        $("#e").animate({ left: "0"},9000);
        $("#r").animate({ left: "0"},12000);
        $("#y").animate({ left: "0"},15000);

        $("#j").animate({ left: "3000px"},1000);
        $("#Q").animate({ left: "3000px"},2000);
        $("#u").animate({ left: "3000px"},3000);
        $("#e").animate({ top: "-5000px"},4000);
        $("#r").animate({ left: "3000px", top: "500px"},5000);
        $("#y").animate({ left: "3000px"},5000);
        setTimeout(showPart3, 15000)   
    }

    function showPart3(){
        $("#sub-title").css("visibility", "hidden");
        $("ul").animate({
            opacity: 1.0
        },2000);
        $("ul li").animate({
            padding: "70px"
        },3000);
        $("ul li:last-child").animate({
            borderRadius: "50%"
        }, 5000);
        $("ul li:nth-child(4)").animate({
            width: "1px",
            paddingLeft: "0px",
            paddingRight: "0px"
        }, 2000);
        $("ul li:nth-child(3)").animate({
            width: "500px"
        }, 4000);     
        $("ul li:nth-child(2)").animate({
            borderRadius: "50%"
        }, 2000);
        $("ul li:nth-child(1)").animate({
            width: "1px",
            paddingLeft: "0px",
            paddingRight: "0px"
        }, 7000);
        $(".js-heading").animate({
            marginLeft: "500px"
        }, 3000, encore)

    }

    function encore(){
        $("#sub-title").css("visibility", "hidden");
        $("ul").animate({
            opacity: 0
        },7000);
        $("ul li").animate({
            padding: "0px"
        },8000);
        $("ul li:last-child").animate({
            borderRadius: "0%"
        }, 4000);
        $("ul li:nth-child(4)").animate({
            width: "50px",
            borderRadius: "50%"
        }, 4000);
        $("ul li:nth-child(3)").animate({
            width: "50px",
            borderRadius: "50%"
        }, 10000);     
        $("ul li:nth-child(2)").animate({
            borderRadius: "0%"
        }, 8000);
        $("ul li:nth-child(1)").animate({
            width: "1px",
            paddingLeft: "0px",
            paddingRight: "0px"
        }, 2000);
        $(".js-heading").animate({
            marginLeft: "10px"
        }, 5000, endShow);


    }

    function endShow() {
        setTimeout(
            function(){ $(".js-heading").html("Now it's over. Wasn't that fun?")}
            ,4000
        );
        $("#square").fadeOut(8000);
        $("#action-button").text("The End").css({"background":"black","color":"white"})
        $("#action-button").fadeOut(20000);
    }
    

    $(".js-heading").show();

}); //closes document ready