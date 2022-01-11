$(document).ready(function($) {

    $(window).on('load', function(){
        setInterval(function(){
            $("#loading").fadeOut(350);
            $(".main").addClass('active');
        },3000);
       
    });


    $(".menu>ul>li>.scroll_move").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

    });

    

    $(".section03 .nav h3").click(function(){

        $(".section03 .nav h3,.section03 .nav .slide").removeClass("on");
        $(this).addClass("on");
        $(this).next(".slide").addClass("on");


    });




// var slideIndex = 0;

// setInterval(function () {

//     if(slideIndex > 2){
//         slideIndex = 0;
//     };
//     $(".slide_box_wrap>.slide_box").css({"top" : -800 * slideIndex });

//     console.log(slideIndex);


//     slideIndex++;

// },7000);


}); /*레디끝 */






