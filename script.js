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


// 
// const decrementBtn = document.querySelectorAll(".decrement-btn");
// const incrementBtn = document.querySelectorAll(".increment-btn");
// const quantity = document.querySelectorAll(".product-quantity input");



// const currValue = +quantity.value;
// toggleButton(currValue)

// function toggleButton(count) {
//     decrementBtn.disabled = count <=1;
//     incrementBtn.disabled = count >=5;
// }

// function toggleButtonState(count, incrementBtn, decrementBtn) {
//     decrementBtn.disabled = count <= 1;
//     incrementBtn.disabled = count >= 5;
//   }
// incrementBtn.forEach((incrementBtns,i)=>{
//     incrementBtns.addEventListener("click" , function () {
//         const nextValue = +quantity[i].value + 1;
//         quantity[i].value = nextValue
//         toggleButton(nextValue)
//     })
// })

// decrementBtn.forEach((decrementBtns,i) => {
//     decrementBtns.addEventListener("click" , function () {
//         const nextValue = +quantity[i].value - 1;
//         quantity[i].value = nextValue
//         toggleButton(nextValue)
//     })
// })

const decrementBtns = document.querySelectorAll(".decrement-btn");
const incrementBtns = document.querySelectorAll(".increment-btn");
const quantityYnputs = document.querySelectorAll(".product-quantity input");
function Counter(incrementBtn,decrementBtn,inputField, minCount = 1, maxCount = 5) {
    this.domRefs= {
        incrementBtn,
        decrementBtn,
        inputField,
    }
    this.toggleButtonState = function () {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    }
    this.toggleButtonState()

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1
        this.toggleButtonState()
    }
    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1
        this.toggleButtonState()
    }
   
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this))
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this))
}   



const counters =[]
quantityYnputs.forEach((item, i)=> {
    counters[i] = new Counter(incrementBtns[i],decrementBtns[i],item)
})