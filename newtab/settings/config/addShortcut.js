const button = document.getElementById("create-button")
button.addEventListener("click", function() {
    //chrome.storage.sync.set({"key":[]}, function() {})
    const name = document.getElementById("shortcut-name").value
    const url = document.getElementById("shortcut-url").value
    const icon = "fa-" + document.getElementById("shortcut-icon").value
    let mode = ""
    var data

    if (document.getElementById("work-mode").checked) {
        mode = "work"
    } else {
        mode = "game"
    }

    chrome.storage.sync.get(["key"], function(result) {
        data = result.key
        console.log(result)
        console.log(data)
        //add new shortcut
        const obj = {
            "name" : name,
            "url" : url,
            "icon" : icon,
            "mode" : mode
        }
        data.push(obj)

        chrome.storage.sync.set({"key": data}, function() {
            console.log("success")
        })
        
        chrome.storage.sync.get(["key"], function(result) {
            console.log(result.key)
        })

        window.location.href = "success.html"
    })
})