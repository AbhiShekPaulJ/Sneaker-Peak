let cartEle = document.getElementById("cart")
let cartpageEle = document.getElementById("cartpage")
let greet = document.getElementById("welcome")
// let body = document.getElementsByTagName("body")[0]
let main = document.getElementById("main")

cartEle.addEventListener("click",()=>{

    console.log("cart clocked");
    
    cartpageEle.style.transform = "translateX(0)"
    cartpageEle.style.transitionDuration = "1s"
    if(window.outerWidth <= 700){
        cartpageEle.style.display = "block"
    }
    // body.style.backgroundColor = "magenta";
    // cartpageEle.style.backgroundColor = "transparent";
})
cartpageEle.addEventListener("click",(e)=>{
    // console.log("cart");
    e.preventDefault()
    if(e.target.innerText == "X"){
        cartpageEle.style.transform ="translateX(35vw)"
        cartpageEle.style.transitionDuration = "1s"
        if (window.outerWidth <= 700) {
            // cartpageEle.style.transform = "translateX(110vw)"; // Push it completely off screen on mobile
            cartpageEle.style.display = "none"
            // console.log("mobile");
            
            
        }
    }
})
greet.innerHTML = `<b>Hello, ${window.localStorage.getItem("name")} welcomeback!</b>`

// let cartpremove = document.getElementById("cart-remove")

// cartpremove.addEventListener("click",(e)=>{
//     if(e.target.innerText == "Remove")
//     console.log(e.target.parentElement);
//     e.target.parentElement.parentElement.remove()
// })







let productobj =[{
    pname: "Nike Pegasus",
    pimg: "./assets/nike.jpeg", 
    pdisc: "Men's Road Running Shoes",
    price: 220
},
{
    pname: "Air Max 90 LV8",
    pimg: "./assets/Nike1.jpeg",
    pdisc: "Men's Road Running Shoes",
    price: 400
},
{
    pname: "Nike Dunk Low Retro",
    pimg: "./assets/nike2.jpeg", 
    pdisc: "Men's Road Running Shoes",
    price: 300
},
{
    pname: "Sabrina 2 EP",
    pimg: "./assets/nike3.jpeg",
    pdisc: "Men's Road Running Shoes",
    price: 900
},
{
    pname: "Nike Air Jorden 1s",
    pimg: "./assets/nike4.jpeg",
    pdisc: "Men's Road Running Shoes",
    price: 1650
},
{
    pname: "Nike Air Max Dn8",
    pimg: "./assets/nike5.jpeg",
    pdisc: "Men's Road Running Shoes",
    price: 1000
},
{
    pname: "Nike Air Max Ks8",
    pimg: "./assets/nike6.jpeg",
    pdisc: "Men's Road Running Shoes",
    price: 600
}]
console.log(productobj);
for(let i of productobj){
    let products = document.querySelector(".products")
    let product = document.createElement("div")
    product.classList.add("product")
    product.innerHTML += `
                <div class="p-img">
                    <img class="pimg" src=${i.pimg} alt="">
                </div>
                <p class="pname">${i.pname}</p>
                <p class="pdisc">${i.pdisc}</p>
                <p class="pcost">${i.price}</p>
                <button>Add to Cart</button>`
    products.appendChild(product)
}


let product = document.querySelectorAll(".product")
let cartp = document.querySelector(".cartproducts")
product.forEach((product)=>{
    product.addEventListener("click", (e)=>{
        e.preventDefault()
        if(e.target.innerText === "Add to Cart"){
            console.log("cart added");
            cartp.nextElementSibling.innerHTML = ''
            let parent = e.target.parentElement
            // console.log(parent);
            let img = parent.querySelector(".pimg").src
            let name = parent.querySelector(".pname").innerText
            let cost = parent.querySelector(".pcost").innerText
            // console.log(cost);
            cartp.innerHTML += `<div class="cart-p">
                                    <div class="cartpimage">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="cart-pdetails">
                                        <p class="cart-pname">${name}</p>
                                        <p id="pcost">${+cost}</p>
                                        <input class="cart-p-count" min="1" value="1" type="number">
                                        <button "class="cart-remove">Remove</button>
                                    </div>
                                </div>`
            
            cartTotal()
            
            cartcount()
        }
    })
})

cartp.addEventListener("click",(e)=>{
    if(e.target.innerText == "Remove"){
        e.target.parentElement.parentElement.remove()
    }
    cartTotal()
    cartcount()
})

function cartTotal(){
    let totaltext = cartp.nextElementSibling.nextElementSibling
    let cartproduct =  document.querySelectorAll(".cart-p")
    let totalcost = 0 
    cartproduct.forEach(item =>{
        let priceofproduct = Number(item.querySelector("#pcost").innerText)
        let count = Number(item.querySelector(".cart-p-count").value)

        totalcost += priceofproduct * count
    })
    totaltext.innerText = `Total : ${totalcost}`
}
 function cartcount(){
    let cartcount = document.getElementById("cartcount")
    cartcount.style.visibility = "visible"
    cartcount.innerText = cartp.childElementCount
    console.log(cartp.childElementCount);
    if(cartp.childElementCount == 0){
        cartcount.style.visibility = "hidden"
    }
 }

let buy = document.getElementById("buy")
buy.addEventListener("click",(e)=>{
    if(cartp.innerHTML.trim() != ""){
        alert("Thanks for your purchase")
        cartp.innerHTML = ""
    }
    cartTotal()
})


