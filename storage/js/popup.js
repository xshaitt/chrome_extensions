chrome.storage.sync.set({'xsh': 'xtt'}, function () {
    alert('写入xsh');
});
chrome.storage.sync.get('xsh', function (result) {
    console.log(result.xsh);
});