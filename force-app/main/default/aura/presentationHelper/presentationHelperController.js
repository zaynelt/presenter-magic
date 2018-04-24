({
    kickoffAll : function(component, event, helper){
        var slides = component.find("slides");
        var player = component.find("songHelper");
        var song = component.get("v.walkOnSong");
        slides.slidesKO(slides);
        if(song){
            player.start(song);
        }
          
    },
    setSong : function(component, event, helper){
        var select = event.getParam("song");
        if(select) component.set("v.walkOnSong", select);
    }
})
