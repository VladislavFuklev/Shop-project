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
    form.classList.add('hide')
}
btnClose.addEventListener('click', closeForm)

let iconHearts = document.querySelectorAll(".heart-icon")


function bgcIcon(e) {
    e.target.style.backgroundColor = "white"
}
iconHearts.forEach((icon)=>{
    icon.addEventListener("click", bgcIcon)
})

