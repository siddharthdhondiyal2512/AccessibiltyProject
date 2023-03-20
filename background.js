chrome.commands.onCommand.addListener((command) => {
    if (command == "execute-suggestion-mode") {
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{type:"suggestion-mode-started", contentScript: "suggestionMode"})
        })
    }
    else if(command=="execute-proximity-mode"){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{type:"proximity-mode-started", contentScript: "proximityMode"})
        })
    }
});

