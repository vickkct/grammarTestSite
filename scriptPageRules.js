var dataRules;
readTextFile(rulesJson, function(text){
    dataRules = JSON.parse(text);
    console.log(dataRules);
});

const ruleDivs = document.querySelectorAll(".rule-div")

ruleDivs.forEach( function(el){
    el.addEventListener('click', openRule);
}
)

const mainListRules = document.getElementById("list-rules-block")
const mainRule = document.getElementById("rule-block")
const divTextRule = document.getElementById("rule-text-div")
document.getElementById("exit-rule-btn").addEventListener('click', closeRule);

var numberRule = 0;

function openRule(event){
    mainListRules.classList.toggle("hidden");
    mainRule.classList.remove("hidden");
    console.log(dataRules[0])
    divTextRule.innerHTML = dataRules[0]["ruleText"];
}
function closeRule(event){
    mainRule.classList.toggle("hidden");
    mainListRules.classList.remove("hidden");
}