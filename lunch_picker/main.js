$(document).ready(function() 
{
    $("input").click(function()
    {
        var numberofListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberofListItem);
        console.log(randomChildNumber);
        $("H1").text($("#choices li").eq(randomChildNumber).text());
    });
});