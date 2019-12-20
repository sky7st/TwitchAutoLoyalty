var alarmInfo = {
    delayInMinutes: 1,
    periodInMinutes : 1
}

chrome.alarms.clearAll();
chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.tabs.query({}, function(tabs) { 
        tabs.forEach(tab => {
            var url = new URL(tab.url);
            var domain =  url.hostname;
            if(domain === "www.twitch.tv"){
                console.log("Get Twitch Pages:" + url);
                chrome.tabs.executeScript(tab.id, {file: "execute.js"});
            }
        });
    } );
});
chrome.alarms.create('testAlarm',alarmInfo);