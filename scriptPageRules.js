const ruleDivs = document.querySelectorAll(".rule-div")

const mainListRules = document.getElementById("list-rules-block")
const mainRule = document.getElementById("rule-block")

ruleDivs.forEach( function(el){
    el.addEventListener('click', openRule);
}
)

function openRule(event){
    mainListRules.classList.toggle("hidden");
    mainRule.classList.remove("hidden");
}