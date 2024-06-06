const startTestBtn = document.getElementById('start-test-btn');
const mainStartTest = document.getElementById('start-test-block')
const plusCountWordSettingsBtn = document.getElementById('plus-word-btn');
const minusCountWordSettingsBtn = document.getElementById('minus-word-btn');
const counterWordSettings = document.getElementById('counter-word-settings-value');
const containerCategories = document.getElementById('category-div-container');

var testCategoryItems;
var dataDict;

readTextFile(dictonaryJson, function(text){
    dataDict = JSON.parse(text);
    console.log(dataDict);

    containerCategories.innerHTML += "<div class='category-div-item category-div-item-active'> <h3 class='category-item-h3'>" + dataDict[0]["category name"] + "</h3><p class='category-item-p'> Слов: " + dataDict[0]["words"].length + "</p></div>";

    for (let i = 1; i < dataDict.length; i++) {
        containerCategories.innerHTML += "<div class='category-div-item'> <h3 class='category-item-h3'>" + dataDict[i]["category name"] + "</h3><p class='category-item-p'> Слов: " + dataDict[i]["words"].length + "</p></div>";
    }

    testCategoryItems = document.querySelectorAll(".category-div-item");
    testCategoryItems.forEach( function(el){
        el.addEventListener('click', selectCategoryTest);
    }
)
});

startTestBtn.addEventListener('click', () => {
    mainStartTest.classList.toggle('hidden');
});


function selectCategoryTest(event){
    testCategoryItems.forEach(function(el){
        el.classList.remove('category-div-item-active');
    })

    const target = event.currentTarget;
    target.classList.add('category-div-item-active');
}


let countWordSettings = 20;

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