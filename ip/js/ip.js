function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest('http://pv.sohu.com/cityjson?chrome=utf-8', function (ip) {
    //虽然使用这样的方式去获取ip地址一点也不稳定，但以我的精力以及对chrome扩展的兴趣来看，也只能到这儿了
    var arr = ip.split('"');
    document.getElementById('ip_div').innerText = arr[3];
});