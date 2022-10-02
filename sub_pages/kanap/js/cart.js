let stringArray = localStorage.cart;
let cart = JSON.parse(stringArray);
let cartItems = document.getElementById('cart__items');

/**
 * For each product in the cart, we get the product data from the API
 * Then, we display the product in the page
 */
cart.forEach(product => {
    fetch(`/sub_pages/kanap/api/products/${product.id}.json`)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (productFromApi) {
            product.price = productFromApi.price;

            // 1) Create the elements
            let article = document.createElement('article');
            let divCartItemImg = document.createElement('div');
            let img = document.createElement('img');
            let divCartItemContent = document.createElement('div');
            let divCartItemContentDescription = document.createElement('div');
            let h2 = document.createElement('h2');
            let pColor = document.createElement('p');
            let pPrice = document.createElement('p');
            let divCartItemContentSettings = document.createElement('div');
            let divCartItemContentSettingsQuantity = document.createElement('div');
            let pQuantity = document.createElement('p');
            let inputItemQuantity = document.createElement('input');
            let divCartItemContentSettingsDelete = document.createElement('div');
            let pDeleteItem = document.createElement('p');

            // 2) Set the attributs
            article.setAttribute('class', 'cart__item');
            article.setAttribute('data-id', product.id);
            article.setAttribute('data-color', product.color);
            divCartItemImg.setAttribute('class', 'cart__item__img');
            img.setAttribute('src', '/sub_pages/kanap/api/images/'+product.imageUrl);
            img.setAttribute('alt', product.altTxt);
            inputItemQuantity.setAttribute('type', 'number');
            inputItemQuantity.setAttribute('class', 'itemQuantity');
            inputItemQuantity.setAttribute('name', 'itemQuantity');
            inputItemQuantity.setAttribute('min', '1');
            inputItemQuantity.setAttribute('max', '100');
            inputItemQuantity.setAttribute('value', product.quantity);
            divCartItemContent.setAttribute('class', 'cart__item__content');
            divCartItemContentDescription.setAttribute('class', 'cart__item__content__description');
            divCartItemContentSettingsQuantity.setAttribute('class', 'cart__item__content__settings__quantity');
            divCartItemContentSettings.setAttribute('class', 'cart__item__content__settings');
            divCartItemContentSettingsDelete.setAttribute('class', 'cart__item__content__settings__delete');
            pDeleteItem.setAttribute('class', 'deleteItem');

            // 2.bis) Insert text content for elements when needed
            h2.textContent = product.name;
            pPrice.textContent = product.price;
            pColor.textContent = product.color;
            pQuantity.textContent = 'Qté : ';
            pDeleteItem.textContent = 'Supprimer';

            // 3) Define the relationship between elements
            article.appendChild(divCartItemImg);
            article.appendChild(divCartItemContent);
            divCartItemImg.appendChild(img);
            divCartItemContent.appendChild(divCartItemContentDescription);
            divCartItemContent.appendChild(divCartItemContentSettings);
            divCartItemContentDescription.appendChild(h2);
            divCartItemContentDescription.appendChild(pColor);
            divCartItemContentDescription.appendChild(pPrice);
            divCartItemContentSettings.appendChild(divCartItemContentSettingsQuantity);
            divCartItemContentSettings.appendChild(divCartItemContentSettingsDelete);
            divCartItemContentSettingsQuantity.appendChild(pQuantity);
            divCartItemContentSettingsQuantity.appendChild(inputItemQuantity);
            divCartItemContentSettingsDelete.appendChild(pDeleteItem);
            cartItems.appendChild(article);

            // Set the event listeners for quantity change and product delete events
            inputItemQuantity.addEventListener('change', updateProductQuantity);
            pDeleteItem.addEventListener('click', deleteProduct);

            updateTotalPrice(cart);
        })
        .catch(function (err) {
        });
});

/**
 * Update the displayed number of products in the cart
 * @param {Array} cart 
 */
function updateNbrOfProductsDisplay(cart) {
    let totalQuantity = document.getElementById('totalQuantity');
    let nbrProducts = 0;
    for (let i=0; i < cart.length; i++) {
        nbrProducts = nbrProducts + parseInt(cart[i].quantity);
    }

    totalQuantity.textContent = nbrProducts;
};

updateNbrOfProductsDisplay(cart);

/**
 * Update the displayed total price
 * @param {Object} cart 
 */
function updateTotalPrice(cart) {
    let totalPrice = document.getElementById('totalPrice');
    let total = 0;
    for (let i=0; i < cart.length; i++) {
        total = total + (parseInt(cart[i].quantity) * parseInt(cart[i].price));
    }

    totalPrice.textContent = total;
}

/**
 * Update product quantity in the cart and persist data in the localstorage
 * @param {Object} event 
 */
function updateProductQuantity(event) {
    const input = event.target;
    const newQuantity = input.value;
    let article = input.closest('article');
    const dataId = article.getAttribute("data-id");
    const dataColor = article.getAttribute("data-color");

    // Search the product for which we need to update the quantity
    for (let i = 0; i < cart.length; i++) {
        let currentProduct = cart[i];
        if (dataColor === currentProduct.color && dataId === currentProduct.id) {
            currentProduct.quantity = newQuantity;
        }
    }

    stringArray = JSON.stringify(cart);
    localStorage.setItem("cart", stringArray);

    updateNbrOfProductsDisplay(cart);
    updateTotalPrice(cart);
}
/**
 * Remove a product from the cart
 * @param {object} event
 */
function deleteProduct(event) {
    const p = event.target;
    let article = p.closest('article');
    const dataId = article.getAttribute("data-id");
    const dataColor = article.getAttribute("data-color");

    article.parentNode.removeChild(article);

    for (let i = 0; i < cart.length; i++) {
        let currentProduct = cart[i];
        if (dataColor === currentProduct.color && dataId === currentProduct.id) {
            cart.splice(i, 1);
        }
    }
    stringArray = JSON.stringify(cart);
    localStorage.setItem("cart", stringArray);

    updateNbrOfProductsDisplay(cart);
    updateTotalPrice(cart);
}

function validateName(name, element, errorMsg) {
    element.textContent = "";

    if(!name.length || /\d/.test(name)){
        element.textContent = errorMsg;
        return 1;
    } else {
        return 0;
    }
}

const validateEmail = (email, element, errorMsg) => {
    element.textContent = "";

    if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        element.textContent = errorMsg;
        return 1;
    } else {
        return 0;
    }
};

const validateAddress = (address, element, errorMsg) => {
    element.textContent = "";

    if (address.length < 2) {
        element.textContent = errorMsg;
        return 1;
    } else {
        return 0;
    }
}

/**
 * Validate form fields and send the contact and cart data to postOrder()
 * @param {Event} event 
 */
function handleCartSubmit(event) {
    event.preventDefault();
    let countError = 0;
    let firstName = document.getElementById("firstName").value;
    let fistNameError = document.getElementById("firstNameErrorMsg");
    let lastName = document.getElementById("lastName").value;
    let lastNameError = document.getElementById("lastNameErrorMsg");
    let address = document.getElementById("address").value;
    let addressError = document.getElementById("addressErrorMsg");
    let city = document.getElementById("city").value;
    let cityError = document.getElementById("cityErrorMsg");
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailErrorMsg");
    
    countError += validateName(firstName, fistNameError, "Le champ prénom ne doit pas être vide ni contenir de chiffre");
    countError += validateName(lastName, lastNameError, "Le champ nom ne doit pas être vide ni contenir de chiffre");
    countError += validateName(city, cityError, "Le champ ville ne doit pas être vide ni contenir de chiffre");
    countError += validateEmail(email, emailError, "Le champ email ne doit pas être vide et avoir un @");
    countError += validateAddress(address, addressError, "Le champ adresse ne doit pas être vide");
    
    if(countError){
        console.log('erreur');
        event.preventDefault();
        return;
    }

    let stringArray = localStorage.cart;
    let cart = JSON.parse(stringArray);
    let productIds = [];
    for ( let i=0; i < cart.length; i++){
        productIds.push(cart[i].id);
    }

    
    let order = {
        contact: {
            firstName : firstName,
            lastName : lastName,
            address : address,
            city : city,
            email : email,
        },
        products : productIds,
    }
    
    postOrder(order);
}

let form = document.getElementsByClassName("cart__order__form")[0];
form.onsubmit = handleCartSubmit;

/**
 * Send the order to the API and then, redirect to the confirmation page
 * @param {Object} order
 */
async function postOrder (order){
  document.location.href = `./confirmation.html`;
}



