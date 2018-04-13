({
    doInit : function(component, event, helper){
        helper.helpSetSongs(component, event);
    },
    handleSelect : function(component, event, helper) {
        var songEvt = $A.get('e.c:songSelectEvt');
        var song = event.getParam('value');
        console.log('song: '+ song);
        songEvt.setParams({
            "song" : song
        });
        songEvt.fire();
    },
    
})
