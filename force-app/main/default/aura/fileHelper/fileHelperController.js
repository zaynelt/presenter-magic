({
    doInit: function(component, event, helper){
        component.set("v.userId", $A.get("$SObjectType.CurrentUser.Id"));
        helper.getFiles(component);
    },
    handleUploadFinished: function (component, event, helper) {
        // This will contain the List of File uploaded data and status
        var uploadedFiles = event.getParam("files");
        console.log(uploadedFiles);
        console.log(uploadedFiles[0].documentId);
        helper.getFiles(component);
        
    }
})
