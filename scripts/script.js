$(function(){
    $(".menuItem").hide();
    $(".menu").mouseenter(function()
   {
       var menu_id = $(this).attr("id");
       alert(menu_id);
   });
   

   $("#a").mouseenter(function(){
       $("#b").html("O");
   }).mouseleave(function(){
       $("#b").html("X");
   });
});



function changeColor(n){
    if(n==1){
        var temp=document.getElementById("box").style.background;
        if(temp==='red'){
            document.getElementById("box").style.background = 'rgb(' + 248 + ',' + 151 + ',' + 151 + ')';
        }
        else{
            document.getElementById("box").style.background="red";
            document.getElementById("box2").style.background = 'rgb(' + 241 + ',' + 241 + ',' + 183 + ')';
            document.getElementById("box3").style.background = 'rgb(' + 151 + ',' + 194 + ',' + 151 + ')';
        }
    }
    else if(n==2){
        var temp=document.getElementById("box2").style.background;
        if(temp==='yellow'){
            document.getElementById("box2").style.background = 'rgb(' + 241 + ',' + 241 + ',' + 183 + ')';
        }
        else{
            document.getElementById("box2").style.background="yellow";
            document.getElementById("box").style.background = 'rgb(' + 248 + ',' + 151 + ',' + 151 + ')';
            document.getElementById("box3").style.background = 'rgb(' + 151 + ',' + 194 + ',' + 151 + ')';
        }
    }

    else if(n==3){
        var temp=document.getElementById("box3").style.background;
        if(temp==="green"){
            document.getElementById("box3").style.background = 'rgb(' + 151 + ',' + 194 + ',' + 151 + ')';
        }
        else{
            document.getElementById("box3").style.background="green";
            document.getElementById("box").style.background = 'rgb(' + 248 + ',' + 151 + ',' + 151 + ')';
            document.getElementById("box2").style.background = 'rgb(' + 241 + ',' + 241 + ',' + 183 + ')';
        }
    }
    else{
        return;
    }
}

