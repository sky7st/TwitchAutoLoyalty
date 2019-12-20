function goToActivityTab() {
    try {
        var activityTab = document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0];
        activityTab.click();
        console.log("Auto click gift button!!")
    } catch (error) {
        
    }
    
}

goToActivityTab();