async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

chrome.action.onClicked.addListener((tab) => {
    const url = tab.url;
    const details = {
        "url":url,
        "focused":true,
        "height":600,
        "width":600,
        "type":"popup"
    };
    chrome.windows.create(
        details
    )
  });
