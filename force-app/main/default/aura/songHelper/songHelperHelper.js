({
    watchPlay : function(component, helper){
        window.setTimeout(
            $A.getCallback(function() {
                console.log('stop invoke:');
                helper.stopPlay(component);
                //duration may need to change, based on connectivity
            }), 16880
        );
    },
    stopPlay : function(component) {
        //turn off song
        //component.set("v.togglePlay", "stop");
        component.set("v.body", []);
    } 
})
