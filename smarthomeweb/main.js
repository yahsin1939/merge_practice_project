$(document).ready(function() {
    getLightSwitchStatus();
});

function getLightSwitchStatus(){
    var url = "https://sheetdb.io/api/v1/5b960abe18fc8/search?";
    var data = $.getJSON(url,{
        light_name:"main"
    })
    .done(
        function(msg){
            console.log(msg);
            $("h1").text("電燈狀態:"+msg[0].light_switch);
            if(msg[0].light_switch=="開"){
                $("img").attr("src","smarthomeweb/images/pic_bulbon.gif");
               
            }else{
                $("img").attr("src","smarthomeweb/images/pic_bulboff.gif");
            
            }
        
}
        )
    .fail(
        function(msg){
            console.log("fail!");
        }
    )
    .always(
        function(msg){
            console.log("complete!");
        });
    

  }