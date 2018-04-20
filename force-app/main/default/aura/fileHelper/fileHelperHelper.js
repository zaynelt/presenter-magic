({
    getFiles : function(component) {
        var action = component.get("c.showUserFiles");
        console.log(component.get("v.userId"));
        action.setParams({
            userId: component.get("v.userId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('returnVal:', response.getReturnValue());
                if(response.getReturnValue().length > 0) component.set("v.fileList", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})
