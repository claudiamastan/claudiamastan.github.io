$(document).ready(function(){
    var content = $("article");
    content.load("about.html");

    $("#about").click(function(){
        content.load("about.html");
    });

    $("#experience").click(function(){
        content.load("exp.html");
    });

    $("#project").click(function(){
        content.load("projects.html");
    });

    $("#contact").click(function(){
        content.load("contact.html");
    });

});