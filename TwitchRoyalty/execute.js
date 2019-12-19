function goToActivityTab() {
    try {
        var activityTab = document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0];

        activityTab.click();
        console.log("auto click special button!!")
    } catch (error) {
        
    }
    
}

goToActivityTab();