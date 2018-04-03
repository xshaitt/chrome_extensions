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

function showWeather(result) {
    result = JSON.parse(result);
    var weather = result.weatherinfo;
    var table = '<table><tr><th>城市</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    table += '<tr>';
    table += '<td>' + weather.city + '</td>';
    table += '<td>' + weather.weather + '</td>';
    table += '<td>' + weather.temp1 + '</td>';
    table += '<td>' + weather.temp2 + '</td>';
    table += '</tr>';
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city ? city : '101010100';
var url = 'http://www.weather.com.cn/data/cityinfo/' + city + '.html';
httpRequest(url, showWeather);