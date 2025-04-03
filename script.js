let products = [
  {
    name: "Black/Grey Sports Shoe for men",
    price: 4797,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0EM0S0152A/BLACK_LGREY/FGC0EM0S0152A_B34_0.webp",
  },

  {
    name: "Blue Sports Sneaker for Women",
    price: 3897,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FLC0150S0142A/BLUE/FLC0150S0142A_005_0.webp",
  },

  {
    name: "Pink Slip-on shoes",
    price: 1500,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FLC0H40T3272A/PINK/FLC0H40T3272A_117_0.webp",
  },

  {
    name: "Navy Polyurethane Mens Sports",
    price: 1095,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0Z7039422A/NAVY/FGC0Z7039422A_030_0.webp",
  },

  {
    name: "Olive casual sneaker",
    price: 1500,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0H40T3262A/OLIVE/FGC0H40T3262A_111_0.webp",
  },

  {
    name: "White Sports Shoe for Men",
    price: 2246,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0DN046842A/WHITE/FGC0DN046842A_044_0.webp",
  },

  {
    name: "Black  Sports Shoes For Men",
    price: 2306,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0DN060382A/BLACK/FGC0DN060382A_004_0.webp",
  },

  {
    name: "Navy Slip-on Shoe for Men",
    price: 2228,
    imageurl:
      "https://assets.woodlandworldwide.app/product/images/FGC0Y9039132A/NAVY/FGC0Y9039132A_030_0.webp",
  },

  {
    name: "Woodsport Black Sports Shoes",
    price: 2226,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC0DN060372A/BLACK/FGC0DN060372A_004_0.webp",
  },

  {
    name: "  Pink sneakers for women",
    price: 4109,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FLC0DY0T7822A/PINK/FLC0DY0T7822A_117_0.webp",
  },

  {
    name: "  Sand Sports Shoe for men",
    price: 4797,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC0DY0S0072A/SAND/FGC0DY0S0072A_124_0.webp",
  },

  {
    name: " Black Slip-on Shoe for Men",
    price: 1571,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC026041122A/BLACK/FGC026041122A_004_0.webp",
  },

  {
    name: "  Navy and grey Sneakers for men",
    price: 4497,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC0510T7812A/NAVY_GREY/FGC0510T7812A_225_0.webp",
  },

  {
    name: "  Navy Sports Sneaker for men",
    price: 4797,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC0510S0112A/NAVY/FGC0510S0112A_030_0.webp",
  },

  {
    name: " Black Sports Shoes For Men",
    price: 2166,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC0DN060892A/BLACK/FGC0DN060892A_004_0.webp",
  },

  {
    name: " Black Sports Shoes For Men",
    price: 2166,
    imageurl:"https://assets.woodlandworldwide.app/product/images/FGC026041122A/BLACK/FGC026041122A_004_0.webp",
  },






];

products.forEach(function (item) {
  document.querySelector(".product-row").innerHTML += `
             <div class="product-col">
                  <img  src="${item.imageurl}"/>
               <h3>${item.name}</h3>
               <div class="price">Rs. ${item.price}</div>
                 <button class="buy-btn">Buy Now</button>
             </div>
         `;
});


document.querySelectorAll('.buy-btn').forEach(function(item){
  item.addEventListener('click', function(){
    console.log('clicked', item)

    document.querySelector('.popup').style.display = "flex"
  })


  setTimeout(() => {
   document.querySelector('.popup').style.display = "none"

  }, 3000);
})




let Modal1 = document.querySelector('#open-modal')

console.log(Modal1)

function openmodal(){
  Modal1.style.display = 'flex'
}


function closemodal(){
  Modal1.style.display = 'none'

}