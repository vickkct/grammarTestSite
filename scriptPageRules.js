readTextFile(rulesJson, function(text){
    dataRules = JSON.parse(text);
    updateRuleNames();
});

var numberRule = 0;

const ruleDivs = document.querySelectorAll(".rule-div")
const ruleHs = document.querySelectorAll(".rule-h2")

function updateRuleNames(){
    for (let i = 0; i < ruleHs.length; i++) {
        ruleHs[i].innerHTML = dataRules[i]["ruleName"];
    }
}

var dataRules;

addNumberRule();
ruleDivs.forEach( function(el){
    el.addEventListener('click', openRule);
}
)
function addNumberRule(){
    for (let i = 0; i < ruleDivs.length; i++) {
        ruleDivs[i].addEventListener('click', () => {numberRule = i; console.log(i)});
    }
}

const mainListRules = document.getElementById("list-rules-block")
const mainRule = document.getElementById("rule-block")
const divTextRule = document.getElementById("rule-text-div")
document.getElementById("exit-rule-btn").addEventListener('click', closeRule);

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