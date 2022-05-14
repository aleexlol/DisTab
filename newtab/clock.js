setInterval(function(){
    var today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();
    if (hour.toString().length < 2) { hour = "0" + hour};
    if (minute.toString().length < 2) { minute = "0" + minute};
    if (second.toString().length < 2) { second = "0" + second};
    var time = hour + ":" + minute + ":" + second;
    document.getElementById("time").textContent = time;
}, 1000)