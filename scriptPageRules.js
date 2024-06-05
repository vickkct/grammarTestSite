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

function openRule(event){
    mainListRules.classList.toggle("hidden");
    mainRule.classList.remove("hidden");
    divTextRule.innerHTML = "Новый текст правила"
}
function closeRule(event){
    mainRule.classList.toggle("hidden");
    mainListRules.classList.remove("hidden");
}