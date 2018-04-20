({
    doInit : function(component, event, helper){
        helper.helpSetSongs(component, event);
    },
    handleSelect : function(component, event, helper) {
        var songEvt = $A.get('e.c:songSelectEvt');
        var songOption = event.getParam('value');
        var song = songOption[0];
        var choice = "";
        //to do: refactor to CMDT
        if(song === "handleFun"){
            choice = "https://www.youtube-nocookie.com/embed/iPUmE-tne5U?rel=0&amp;start=09&amp;autoplay=1";
        } else if (song === "handleDance"){
            choice = "https://www.youtube-nocookie.com/embed/LaTGrV58wec?rel=0&amp;autoplay=1";
        } else if (song === "handleBadAzz"){
            choice = "https://www.youtube-nocookie.com/embed/obR-9gfmkQY?rel=0&amp;start=33&amp;autoplay=1"
        }
        songEvt.setParams({
            "song" : choice
        });
        songEvt.fire();
    },    
})
