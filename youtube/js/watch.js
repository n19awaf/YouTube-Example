$(document).ready(function (){
    $("#myBtn").on("click",function(){
        read();
    });

    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btntext = document.getElementById("myBtn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btntext.innerHTML = "عرض المزيد";
        moretext.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btntext.innerHTML = "عرض عناصر أقل"
        moretext.style.display = "inline";
    }
}