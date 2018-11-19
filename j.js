$("input").keypress(function(event){
    if(event.which === 13){
        alert("You hit enter");
    }
    console.log(event);
});

$("button").click(function(){
    $(this).css("background", "pink");
});

$("h1").on("click", function(){
    $(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});