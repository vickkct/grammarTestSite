const testCategoryItems = document.querySelectorAll(".category-div-item");

testCategoryItems.forEach( function(el){
        el.addEventListener('click', selectCategoryTest);
    }
)

function selectCategoryTest(event){
    testCategoryItems.forEach(function(el){
        el.classList.remove('category-div-item-active');
    })

    const target = event.currentTarget;
    target.classList.add('category-div-item-active');
}

let countWordSettings = 20;
const plusCountWordSettingsBtn = document.getElementById('plus-word-btn');
const minusCountWordSettingsBtn = document.getElementById('minus-word-btn');
const counterWordSettings = document.getElementById('counter-word-settings-value');

plusCountWordSettingsBtn.addEventListener('click', () => {
    if(countWordSettings<95)
        countWordSettings+=5;
    counterWordSettings.innerHTML = countWordSettings;
});

minusCountWordSettingsBtn.addEventListener('click', () => {
    if(countWordSettings>10)
    countWordSettings-=5;
    counterWordSettings.innerHTML = countWordSettings;
});

const startTestBtn = document.getElementById('start-test-btn');
const mainStartTest = document.getElementById('start-test-block')
startTestBtn.addEventListener('click', () => {
    mainStartTest.classList.toggle('hidden');
});

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
readTextFile("test.json", function(text){
    data = JSON.parse(text);
    console.log(data);
});