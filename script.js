let products = [
    {
        name: "NIKE Revolution 7 Running Shoes For Men   ",
        price: 3695,
        color: "Black",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/k/q/-original-imah5uwvsj4vhvgw.jpeg?q=70"
    },
    {
        name: "NIKE y.By Mid 3 Basketball Shoes For Men  ",
        price: 3896,
        color: "Black & Red",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/p/s/-original-imah852gfj49hs9x.jpeg?q=70"
    },
    {
        name: "BUCKAROO KORNEL Boat Shoes For Men ",
        price: 3035,
        color: "Blue",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/t/x/11-55-33146-buckaroo-blue-original-imah4nevqamzzdyq.jpeg?q=70"
    },

    {
        name: "NIKE Winflo 11 Premium Running Shoes For Men ",
        price: 7562,
        color: "Orange",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/p/s/-original-imah852gfj49hs9x.jpeg?q=70"
    },

    {
        name: "NIKE Giannis Immortality 3 'Bedtime Snack' Basketball Shoes For Men",
        price: 7095,
        color: "Black",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/t/x/11-55-33146-buckaroo-blue-original-imah4nevqamzzdyq.jpeg?q=70"
    },
    {
        name: " NIKE Precision 6 Basketball Shoes For Men",
        price: 5095,
        color: "Green",
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/t/x/11-55-33146-buckaroo-blue-original-imah4nevqamzzdyq.jpeg?q=70"
    }


];


products.forEach(function (item) {

    document.querySelector(".product-list").innerHTML += `
          <div class="product">
              <img  src="${item.imageUrl}"/>
              <h3>${item.name}</h3>
              <div class="price">Rs. ${item.price}</div>
              <div> ${item.color} </div>
              <button>Buy Now</button>
          </div>
      `;
});
