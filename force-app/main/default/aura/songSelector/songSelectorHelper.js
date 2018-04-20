({
    helpSetSongs : function(component, event) {
        var songs = "[{\"label\": \"I want to have FUN.\", \"value\": \"handleFun\"}, {\"label\": \"Let\'s dance!\", \"value\": \"handleDance\"}, {\"label\": \"Let\'s rock!\", \"value\": \"handleBadAzz\"}]";
        component.set("v.options", JSON.parse(songs));
    }
})
