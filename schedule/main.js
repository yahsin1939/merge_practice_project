$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>Order</th><th>Time</th><th>Necessary</th></tr>");   
    var topicCount =topic.length;
    
    var secondUnit = 1000
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+32*x*dayUnit))).toLocaleDateString().slice(0)+"</td>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("<tr>");
    }
});