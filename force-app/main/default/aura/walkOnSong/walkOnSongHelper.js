({
    stopPlay : function(component) {
        //turn off song
        component.set("v.togglePlay", "stop");
        component.set("v.body", []);
    },
    startPlay : function(component, event, song){
       //create the player component
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
                    component.set("v.togglePlay", "play");
                    var body = component.get("v.body");
                    body.push(newCmp);
                    component.set("v.body", body);
                }
                else {
                    console.log("oops. error:", errorMessage);
                }
            }
        );
    }
})
