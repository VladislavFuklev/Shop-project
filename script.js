let productCount = document.getElementById('product-count')
let addToCartBrns = document.querySelectorAll(".btn-js")
for (let i = 0; i < addToCartBrns.length; i++) {
    addToCartBrns[i].addEventListener("click", function () {
        productCount.textContent  = +productCount.textContent + 1;
    })
}


// MODAL
let modal = document.querySelector(".modal")
let moreBtn = document.querySelectorAll(".btn-more");
let btnClose = document.querySelector(".btn-close")
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
  moreBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
btnClose.addEventListener('click', closeModal)

modal.addEventListener("click", function (e) {
    if(e.target === modal) {
        closeModal()
    }
})
function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight / 2) {
        openModal()
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll",showModalByScroll)




// ICON
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



$(".slider").slick({
    // autoplay:true,
    dots:true
})


