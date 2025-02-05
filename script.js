const btn = document.getElementById("btn");
const model = document.getElementById("model-container");
const closeBtn = document.getElementById("close-btn");



btn.addEventListener("click",function(){
model.style.display='block'

})

closeBtn.addEventListener("click",function(){
    model.style.display='none'
})


window.addEventListener("click",function(e){

    if (e.target === model) {
    model.style.display='none'
        
    }
})

