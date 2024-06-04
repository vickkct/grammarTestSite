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