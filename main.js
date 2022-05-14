chrome.browserAction.onClicked.addListener(function(tab) {
    openPopup()
});

function openPopup(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        window.open(url, 'popup', 'width=600,height=600');
    });
    return false;
}