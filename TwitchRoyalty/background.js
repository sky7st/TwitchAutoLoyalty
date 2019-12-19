var alarmInfo = {
    delayInMinutes: 1,
    periodInMinutes : 1
}

chrome.alarms.clearAll();
chrome.alarms.onAlarm.addListener(function(alarm) {
    //計算定時器觸發次數
    console.log("onAlarm-");
    chrome.tabs.query({}, function(tabs) { 
        tabs.forEach(tab => {
            var url = new URL(tab.url);
            var domain =  url.hostname;
            if(domain === "www.twitch.tv"){
                console.log(tab)
                chrome.tabs.executeScript(tab.id, {file: "execute.js"});
            }
        });
    } );
    // chrome.tabs.query({active: true, currentWindow: false}, function(tabs) {
    //     // Injects JavaScript code into a page
    //     console.log(tabs);

    //     tabs.forEach(tab => {
    //         var url = new URL(tab.url);
    //         var domain =  url.hostname;
    //         console.log(domain);
    //     });
    //     // 
    // });
});
chrome.alarms.create('testAlarm',alarmInfo);