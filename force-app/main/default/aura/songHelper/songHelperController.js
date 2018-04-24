({
    startPlay : function(component, event, helper){
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
                    helper.watchPlay(component, helper); 
                }
                else {
                    console.log("oops. error:", errorMessage);
                }
            }
        );
    },
    
})
