({
    helpSetSongs : function(component, event) {
        var songs = "[{\"label\": \"I want to have FUN.\", \"value\": \"handleFun\"}, {\"label\": \"Let us dance!\", \"value\": \"handleDance\"}, {\"label\": \"I'm bad and I know it.\", \"value\": \"handleBadAzz\"}]";
        component.set("v.options", JSON.parse(songs));
        console.log('options: ', component.get("v.options"));
    }
})
