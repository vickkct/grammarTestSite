let testJson = "https://vickkct.github.io/grammarTestSite/json/test.json";
let popularWordsJson = "https://vickkct.github.io/grammarTestSite/json/popularWords.json";

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var data;

//usage:
readTextFile(testJson, function(text){
    data = JSON.parse(text);
    console.log(data);
});