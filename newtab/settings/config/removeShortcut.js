//get all shortcuts
chrome.storage.sync.get(["key"], function (result) {
    for(var i = 0; i < result.key.length; i++) {
        item = result.key[i]
        temp = " " + item.name + " | " + item.url
        //Build Item
        let form = document.getElementById("main-form")

        let label = document.createElement("label")
        label.className = "label-remove"
        let input = document.createElement("input")
        input.setAttribute("name", "check")
        input.className = "check-remove"
        input.id = i
        input.type = "radio"
        let text = document.createTextNode(temp)
        label.appendChild(input)
        label.appendChild(text)
        form.append(label)
        form.append(document.createElement("br"))
    }
})

const button = document.getElementById("remove-button")
button.addEventListener("click", function() {
    //find number of items in list
    chrome.storage.sync.get(["key"], function (result) {
        let count = result.key.length
        console.log("Number of items: " + count + ". Savedata:")
        console.log(result)
        //find which one is ticked
        let checked
        for (var i = 0; i < count; i++) {
            el = document.getElementById(String(i))
            if (el.checked) {
                checked = i
                console.log(checked)
                //get items , find + remove checked
                chrome.storage.sync.get(["key"], function (inResult) {
                    console.log(inResult)
                    if (checked == 0) {
                        inResult.key.shift()
                        let list = inResult.key
                        chrome.storage.sync.set({"key": list}, function() {
                            console.log("Removed")
                        })
                    } else {
                        inResult.key.splice(checked, i)
                        let list = inResult.key
                        chrome.storage.sync.set({"key": list}, function() {
                            console.log("Removed")
                        })
                    }
                    window.location.href = "success.html"
                    
                })
            }
        }
    })
    
})