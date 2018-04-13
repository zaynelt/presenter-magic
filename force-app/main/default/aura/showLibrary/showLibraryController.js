({
    handleClick : function(component, event, helper) {
        var action = $A.get("e.force:navigateToURL");
        action.setParams({
            url : "/componentReference/suite.app?"
        });
        action.fire();
    }
})
