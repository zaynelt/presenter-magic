({
    stopPlay : function(component) {
        //turn off song
        component.set("v.togglePlay", "stop");
        component.set("v.body", []);
    },
    startPlay : function(component, event){
       //create the player component
       var params = event.getParam('arguments');
       var song = params.song;
       $A.createComponent(
            "aura:html",
            { tag: "iframe",
                body: 'value',
                HTMLAttributes:{"width":"100%",
                "height":"315",
                "frameborder":"0",
                "allow":"encrypted-media",
                "src": song }   
            },
            function(newCmp, status, errorMessage){
                if(status === "SUCCESS"){
                    var temp = component.get("v.body");
                    temp.push(newCmp);
                    component.set("v.body", temp);   
                }
                else {
                    console.log("oops. error:", errorMessage);
                }
            }
        );
    }
})
