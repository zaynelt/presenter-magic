({
    onInit : function(component, event, helper){
        var utilityBar = component.find("utilitybar");
        utilityBar.onUtilityClick({
            utilityId: utilityBar.getEnclosingUtilityId(),
            eventHandler: helper.onClickHelp(component)
        });
    }, 
    handleClick : function(component, event, helper) {
        
        var utilityBar = component.find("utilitybar");
        
        var action = $A.get("e.force:navigateToURL");
        action.setParams({
            url : "/componentReference/suite.app?"
        });
        action.fire(); 
        utilityBar.minimizeUtility();
    }
})