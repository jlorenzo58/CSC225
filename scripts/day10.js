var m = [[1,2,3],[7,0,4],[8,6,5]];

function init(){
    for(var i = 0; i < 3; i++){
        for(var j=0; j<3;j++){
            id = m[i][j];
            $("#t"+id).css("left",j*100+"px");
            $("#t"+id).css("top",i*100+"px");
        }
    }
}

function get_loc(spot){
    for(var i = 0; i < 3; i++){
        for(var j=0; j<3;j++){
            if(m[i][j]==spot){
                return [i,j];
            }
            else continue;
        }
    }
}



$(function(){
    init();
    $(".tile").click(function(){
        //var id= $(this).attr("id");
       //$(this).css("left","100px"); //whichever is clicked "this" is moved from the left 100px
       var id= parseInt($ (this).attr("id").charAt(1));
       var clickedLoc = get_loc(id);
       var zeroLoc = get_loc(0);
       if(clickedLoc[0]==zeroLoc[0] && (zeroLoc[1] - clickedLoc[1])==1){
           $(this).animate({ left:zeroLoc[1]*100+"px" });
           m[clickedLoc[0]][clickedLoc[1]]=0;
           m[zeroLoc[0]][zeroLoc[1]]=id;
       }
       else if(clickedLoc[0]==zeroLoc[0] && zeroLoc[1] - clickedLoc[1]==-1){
            $(this).animate({left:zeroLoc[1]*100+"px" });
            m[clickedLoc[0]][clickedLoc[1]]=0;
            m[zeroLoc[0]][zeroLoc[1]]=id;
        }
        else if(clickedLoc[1]==zeroLoc[1] && zeroLoc[0] - clickedLoc[0]==1){
            $(this).animate({ top:zeroLoc[0]*100+"px" });
            m[clickedLoc[0]][clickedLoc[1]]=0;
            m[zeroLoc[0]][zeroLoc[1]]=id;
        }
        else if(clickedLoc[1]==zeroLoc[1] && zeroLoc[0] - clickedLoc[0]==-1){
            $(this).animate({ top:zeroLoc[0]*100+"px" });
            m[clickedLoc[0]][clickedLoc[1]]=0;
            m[zeroLoc[0]][zeroLoc[1]]=id;
        }
       
    });
});