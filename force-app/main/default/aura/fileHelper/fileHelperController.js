({
    doInit: function(component, event, helper){
        component.set("v.userId", $A.get("$SObjectType.CurrentUser.Id"));
    },
    handleUploadFinished: function (component, event) {
        // This will contain the List of File uploaded data and status
        var uploadedFiles = event.getParam("files");
        
    }
})
