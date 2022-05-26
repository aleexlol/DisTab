chrome.storage.sync.get(["key"], function (result) {
    console.log("found script")
    shortcuts = result.key
    if (!shortcuts) {
        shortcuts = []
    }
    for (var i = 0; i < shortcuts.length; i++) {
        item = shortcuts[i]
        //Construct shortcut
        if (item.mode == document.getElementById("version").innerText) {
            let shortcut = document.createElement("a")
            shortcut.href = item.url
            let div = document.createElement("div")
            div.className = "sb-icon"
            let icon = document.createElement("i")
            icon.className = "fa " + item.icon
            icon.style.cssText = "font-size:2rem;"
            let tag = document.createElement("div")
            tag.className = "sb-icon-tag"
            let text = document.createTextNode(item.name)
            tag.append(text)
            div.append(icon)
            div.append(tag)
            shortcut.append(div)
            let sidebar = document.getElementById("shortcuts")
            sidebar.append(shortcut)
        }
    }
})
