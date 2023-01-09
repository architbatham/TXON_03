$(document).ready(function(){
    $(".input-box").change(function(){
        let inputBox=$(".input-box").val();
        $("ul").append("<li>"+inputBox +" <i class='fa-solid fa-check'></i> <i class='fas fa-trash-alt'></i> </li>");
        $(".input-box").val("");
    });
    $("ul").on("click",".fa-check ",function(){
        $(this).parent("li").toggleClass("mystyle");
    });
    $("ul").on("click",".fa-trash-alt",function(){
        $(this).parent("li").animate({top:"20px"},100).fadeOut(200);
    });

});
