({  
    //to do: refactor for CMDT
    handleFun : function(component, event, helper) {
        var funstate = component.get("v.funState");
        component.set("v.funState", !funstate);
        if(component.get("v.funState") === true){
            //play this song
            component.set("v.danceState", false);
            component.set("v.badazState", false);
            component.set("v.body", []);
            var walking = "https://www.youtube-nocookie.com/embed/iPUmE-tne5U?rel=0&amp;start=09&amp;autoplay=1";
            helper.startPlay(component, event, walking);
        } else if(component.get("v.funState") === false){
            //turn off song
            helper.stopPlay(component);
        }
    },
    handleDance : function(component, event, helper) {
        var dancestate = component.get("v.danceState");
        component.set("v.danceState", !dancestate);
        if(component.get("v.danceState") === true){
            //play this song
                component.set("v.funState", false);
                component.set("v.badazState", false);
                component.set("v.body", []);
                var dance = "https://www.youtube-nocookie.com/embed/LaTGrV58wec?rel=0&amp;autoplay=1";
                helper.startPlay(component, event, dance);
        } else if(component.get("v.danceState") === false){
            //turn off song
            helper.stopPlay(component);
        }      
    },

    handleBadAzz : function(component, event, helper) {
        var badazstate = component.get("v.badazState");
        component.set("v.badazState", !badazstate);
        if(component.get("v.badazState") === true){
            //play this song
            component.set("v.funState", false);
            component.set("v.danceState", false);
            component.set("v.togglePlay", "stop");
            component.set("v.body", []);
            var dorothy = "https://www.youtube-nocookie.com/embed/obR-9gfmkQY?rel=0&amp;start=33&amp;autoplay=1";
            helper.startPlay(component, event, dorothy);
        } else if (component.get("v.badazState") === false){
            //turn off song
            helper.stopPlay(component);
        }       
    }
})
