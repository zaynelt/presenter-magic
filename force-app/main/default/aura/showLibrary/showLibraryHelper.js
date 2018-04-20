({
    onClickHelp : function(component) {
        //check for console nav, handle library open based on app nav style
        var utilityBar = component.find("utilitybar");
        var workspaceAPI = component.find("workspace");
        if(utilityBar) utilityBar.minimizeUtility();
        if(workspaceAPI.isConsoleNavigation() === true){
            console.log('isConsole!');
            workspaceAPI.openTab({
                url: '/componentReference/suite.app?'
            }).then(function(response) {
                workspaceAPI.focusTab({tabId : response});  
            })
            .catch(function(error) {
                console.log(error);
            });
        }else{
            console.log('not console');
            var action = $A.get("e.force:navigateToURL");
            action.setParams({
                url : "/componentReference/suite.app?"
            });
            action.fire();
        }
    }
})