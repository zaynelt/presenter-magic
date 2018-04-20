({
    kickoffAll : function(component, event, helper){
        var slides = component.find("slides");
        var player = component.find("songHelper");
        var song = component.get("v.walkOnSong");
        player.start(song);
        slides.slidesKO(slides);
        window.setTimeout(
            $A.getCallback(function() {
                player.stop();
            }), 16880
        );
    },
    setSong : function(component, event, helper){
        var select = event.getParam("song");
        component.set("v.walkOnSong", select);
    }
})
