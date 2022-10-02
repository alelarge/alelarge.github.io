let pageUrl = window.location.href;
var url = new URL(pageUrl);
var productId = url.searchParams.get("id");
let currentProduct;
let quantityInput = document.getElementById('quantity');
let colorSelect = document.getElementById('colors');

/**
 * Get one product from the API using its id and display it
 * @param {String} productId 
 */
function getProductById(productId) {

    fetch(`/sub_pages/kanap/api/products/${productId}.json`)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (product) {
            currentProduct = product;

            // Insert image of product
            const itemImg = document.getElementsByClassName('item__img')[0];
            const img = document.createElement('img');
            img.setAttribute('src', '/sub_pages/kanap/api/images/'+product.imageUrl);
            img.setAttribute('alt', product.altTxt);
            itemImg.appendChild(img);

            // Insert name of product
            let h1 = document.getElementById('title');
            h1.textContent = product.name;

            // Insert price of product

            let price = document.getElementById('price');
            price.textContent = product.price;

            // Insert description of product

            let description = document.getElementById('description');
            description.textContent = product.description;

            // Insert color options

            product.colors.forEach(function (color) {
                let option = document.createElement('option');
                option.setAttribute('value', color);
                colorSelect.appendChild(option);
                option.textContent = color;
            });
        })
        .catch(function (err) {
        });
}

getProductById(productId);

/**
 * Add a product in the cart
 */
function addToCart() {
    let productInfos = {
        id: currentProduct._id,
        color: colorSelect.value,
        quantity: quantityInput.value,
        name: currentProduct.name,
        description: currentProduct.description,
        imageUrl: currentProduct.imageUrl,
        altTxt: currentProduct.altTxt,
    }

    // check if there is already a cart in localstorage
    if (localStorage.cart) {
        let stringArray = localStorage.cart; // get the content of the cart key from localstorage
        let cart = JSON.parse(stringArray); // parses the JSON string to get cart as an array of objects
        let isProductInCart = false; // By default, we consider that the product is not already in the cart

        cart.forEach(product => {
            if (productInfos.id === product.id && productInfos.color === product.color) {
                isProductInCart = true;
                product.quantity++;
            }
        });

        if (isProductInCart === false) {
            cart.push(productInfos);
        }

        stringArray = JSON.stringify(cart);
        localStorage.setItem("cart", stringArray);

    } else {
        // cart is an array, and we add productInfos to the cart
        let cart = [];
        cart.push(productInfos);
        let stringArray = JSON.stringify(cart);
        localStorage.setItem("cart", stringArray);
    };
    // Redirect user to cart page 
    document.location.href = "./cart.html";

};

// Listen to click event on button addToCart
// Call fonction addToCart

const addToCartBtn = document.getElementById('addToCart');
addToCartBtn.addEventListener('click', addToCart);


