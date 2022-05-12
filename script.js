let productCount = document.getElementById('product-count')
let addToCartBrns = document.querySelectorAll(".btn-js")
for (let i = 0; i < addToCartBrns.length; i++) {
    addToCartBrns[i].addEventListener("click", function () {
        productCount.textContent  = +productCount.textContent + 1;
    })
}



let form = document.querySelector(".modal")
let moreBtn = document.querySelectorAll(".btn-more")
moreBtn.forEach((btn)=> {
    btn.addEventListener("click", function(){
        form.classList.add('show')
    })
})
let btnClose = document.querySelector(".btn-close")
function closeForm() {
    form.classList.remove('show')
}
btnClose.addEventListener('click', closeForm)



let iconHearts = document.querySelectorAll(".heart-icon")
function bgcIcon(e) {
    let white = e.target.style.backgroundColor
    if(white === "white"){
        e.target.style.backgroundColor = "rgb(202, 219, 237)"
    } else {
        e.target.style.backgroundColor = "white"
    }
}
iconHearts.forEach((icon)=>{
    icon.addEventListener("click", bgcIcon)
})

