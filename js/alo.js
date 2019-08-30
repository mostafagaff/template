
 $(window).scroll(function () { 
    let CTT = $(".cover_title").offset().top;
    let st = $(window).scrollTop();
    if (st > CTT) 
    {
       $(".navbar").css("backgroundColor", "black");   
    } 
    else 
    {
       $(".navbar").css("backgroundColor", "transparent");   

    }  

    if (st > 500) 
    {
       $("#btnUp").fadeIn(500);  
    } 
    else
    {
      $("#btnUp").fadeOut(500);
    }



 });


$("#btnUp").click(function (){
    $("body,html").animate({scrollTop:0},1000)
})
    
$("nav a,.section_scroll").click(function () { 
    let aHref = $(this).attr("href");
    let OffS =  $(aHref).offset().top;
    $("body,html").animate({scrollTop:OffS},1000)
});


$(document).ready(function () {
   $("#load").fadeOut(2500,function(){
      $("body").css("overflow", "auto");

   });
});





 




