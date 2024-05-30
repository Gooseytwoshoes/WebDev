var attempt = 0;

function logout(){
    window.location.href = "loginpage.html"; 
}

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "DeadweightDante" && password == "bluerose"){
        window.location.href = "NicoShopHome.html";
        return true;
    } else{
        alert("Wrong credentials");
        attempt++
        if(attempt == 3){
            alert("Cannot login. Attempts exceeded!");
            document.getElementById("btn_login").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("username").value = null;
            document.getElementById("password").value = null;

            return false;
        }
    }
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', () =>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Overture',
        image: 'Overture.jpg',
        description: '',
        quantity: 99,
        price: 5000
    },
    {
        id: 2,
        name: 'Gerbera',
        image: 'Gerbera.jpg',
        description: '',
        quantity: 99,
        price: 5000
    },
    {
        id: 3,
        name: 'Punch Line',
        image: 'Punch_line.jpg',
        description: '',
        quantity: 99,
        price: 6500
    },
    {
        id: 4,
        name: 'Helter Skelter',
        image: 'Helter_skelter.jpg',
        description: '',
        quantity: 99,
        price: 6500
    },
    {
        id: 5,
        name: 'Tomboy',
        image: 'Tomboy.jpg',
        description: '',
        quantity: 99,
        price: 7000
    },
    {
        id: 6,
        name: 'Buster Arm',
        image: 'Buster_arm.jpg',
        description: '',
        quantity: 99,
        price: 7000
    },
    {
        id: 7,
        name: 'Rawhide',
        image: 'Rawhide.jpg',
        description: '',
        quantity: 99,
        price: 7500
    },
    {
        id: 8,
        name: 'Ragtime',
        image: 'Ragtime.jpg',
        description: '',
        quantity: 99,
        price: 7500
    },
    {
        id: 9,
        name: 'Gerbera GP01',
        image: 'Gerbera_GP01.jpg',
        description: '',
        quantity: 99,
        price: 9500
    },
    {
        id: 10,
        name: 'Pasta breaker',
        image: 'Pasta_breaker.jpg',
        description: '',
        quantity: 99,
        price: 9500
    },
    {
        id: 11,
        name: 'Mega Buster',
        image: 'Mega_buster.jpg',
        description: '',
        quantity: 99,
        price: 9500
    },
    {
        id: 12,
        name: 'Sweet surrender',
        image: 'Sweet_surrender.jpg',
        description: '',
        quantity: 99,
        price: 8500
    },
    {
        id: 13,
        name: 'Monkey Business',
        image: 'Monkey_business.jpg',
        description: '',
        quantity: 99,
        price: 8000
    },
    {
        id: 14,
        name: 'Cavaliere R',
        image: 'Cavaliere_R.jpg',
        description: '',
        quantity: 99,
        price: 350000
    },
    {
        id: 15,
        name: 'Double Kalina Ann',
        image: 'Double_kalina_ann.jpg',
        description: '',
        quantity: 99,
        price: 12000
    },
    {
        id: 16,
        name: 'Blue Orb',
        image: 'Blue_orb.png',
        description: '',
        quantity: 99,
        price: 3500
    },
    {
        id: 17,
        name: 'Gold Orb',
        image: 'Gold_orb.png',
        description: '',
        quantity: 99,
        price: 3500
    },
    {
        id: 18,
        name: 'Purple Orb',
        image: 'Purple_orb.png',
        description: '',
        quantity: 99,
        price: 3500
    },
    {
        id: 19,
        name: 'Vital Star',
        image: 'Vital_Star.png',
        description: '',
        quantity: 99,
        price: 6000
    },
    {
        id: 20,
        name: 'Devil Star',
        image: 'Devil_Star.png',
        description: '',
        quantity: 99,
        price: 6000
    },
];

let listCards = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img class = "Product_img" src="${value.image}">
        <div class = "title"> ${value.name}</div>
        <div class = "price"> ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})"> Add to Cart </button>
        `;
        list.appendChild(newDiv);
    })
}

initApp();

function addToCart(key) {
    if (!listCards[key]) {
        listCards[key] = {...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
}

function clearCart() {
    //clear the cart
    for (let key in listCards) {
        delete listCards[key];
    }
    alert("Your items are now being processed!")
    reloadCard();
}

function reloadCard() {
    let count = 0;
    let totalPrice = 0;

    listCard.innerHTML = '';
    listCards.forEach((value, key) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;

        if(value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}

function validateAndSubmit() {
    var shippingName = document.getElementById('shippingName').value;
    var shippingAddress = document.getElementById('shippingAddress').value;
    var shippingBaranggay = document.getElementById('shippingBaranggay').value;
    var shippingCity = document.getElementById('shippingCity').value;
    var shippingZip = document.getElementById('shippingZip').value;
    var shippingContact = document.getElementById('shippingContact').value;

    if (!shippingName ||!shippingAddress ||!shippingBaranggay ||!shippingCity ||!shippingZip ||!shippingContact) {
        alert("Please fill out all required fields.");
        return false;
    } else {
        clearCart();
        return true;
    }
}

//checkout
let closeButton = document.querySelector('.close');
let totalDiv = document.querySelector('.total');

totalDiv.addEventListener('click', function() {
    document.getElementById('popupBox').classList.toggle('show');
});

closeButton.addEventListener('click', function() {
    popupBox.classList.remove('show');
});
