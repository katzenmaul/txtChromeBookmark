window.addEventListener('load', function() {
	document.getElementById('save').addEventListener('click', function() {
		chrome.runtime.sendMessage({"message": "clicked_browser_action"}, function(response) { 
			document.getElementById('content').innerHTML = response.url;		
			});
	 });
});
