var list = "";

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action"){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				if(tabs.length === 0) {
                			sendResponse({"url":"bad url"});
                			return;
            			}
				list = list + tabs[0].url + "<br>";
            			sendResponse( {"url":list} );	
			});
			return true;
		}
	}
);

