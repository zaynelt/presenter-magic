({
    kickoffAll : function(component, event, helper){
        var slides = component.find("slides");
        var player = component.find("songHelper");
        var song = component.get("v.walkOnSong");
        slides.slidesKO(slides);
        if(song){
            player.start(song);
            window.setTimeout(
                $A.getCallback(function() {
                    player.stop();
                    //duration may need to change, based on connectivity
                }), 16880
            );
        }
          
    },
    setSong : function(component, event, helper){
        var select = event.getParam("song");
        if(select) component.set("v.walkOnSong", select);
    }
})
