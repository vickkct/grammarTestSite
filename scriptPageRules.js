const mainListRules = document.getElementById("list-rules-block")
const mainRule = document.getElementById("rule-block")
const divTextRule = document.getElementById("rule-text-div")

readTextFile(rulesJson, function(text){
    dataRules = JSON.parse(text);
    fillMainListRule();
    updateRuleNames();
});

var numberRule = 0;

var ruleDivs
var ruleHs

function updateRuleNames(){
    for (let i = 0; i < ruleHs.length; i++) {
        ruleHs[i].innerHTML = dataRules[i]["ruleName"];
    }
}

var dataRules;

function addNumberRule(){
    for (let i = 0; i < ruleDivs.length; i++) {
        ruleDivs[i].addEventListener('click', () => {numberRule = i; console.log(i)});
    }
}

document.getElementById("exit-rule-btn").addEventListener('click', closeRule);

function fillMainListRule(){
    for (let i = 0; i < dataRules.length; i++) {
        mainListRules.innerHTML += "<div class='rule-div'> <h2 class='rule-h2'></h2> </div>"
    }
    ruleDivs = document.querySelectorAll(".rule-div")
    ruleHs = document.querySelectorAll(".rule-h2")
    addNumberRule();
    ruleDivs.forEach( function(el){
        el.addEventListener('click', openRule);
        }
    )
}
function openRule(event){
    mainListRules.classList.toggle("hidden");
    mainRule.classList.remove("hidden");
    console.log(dataRules[numberRule])
    divTextRule.innerHTML = dataRules[numberRule]["ruleText"];
}
function closeRule(event){
    mainRule.classList.toggle("hidden");
    mainListRules.classList.remove("hidden");
}