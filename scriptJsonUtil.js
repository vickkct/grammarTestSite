const testJson = "https://vickkct.github.io/grammarTestSite/json/test.json";
const popularWordsJson = "https://vickkct.github.io/grammarTestSite/json/popularWords.json";
const rulesJson = "https://vickkct.github.io/grammarTestSite/json/rules.json";

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