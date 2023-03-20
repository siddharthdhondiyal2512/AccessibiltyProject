chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "suggestion-mode-started"&& request.contentScript === "suggestionMode") {
      console.log("suggestion mode on");
    }
  });
  
