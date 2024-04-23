var cart = [];

function addToCart(product, size, price) {
    cart.push({ product: product, size: size, price: price });
    updateCart();
}

function updateCart() {
    var cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    var totalPrice = 0;

    cart.forEach(function(item) {
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        var img = document.createElement('img');
        img.src = item.product + '.png'; // assuming images are named accordingly
        img.height = 50;
        img.width = 50;
        var itemDetails = document.createTextNode(item.product + ' - ' + item.size + ' - €' + item.price);
        cartItem.appendChild(img);
        cartItem.appendChild(itemDetails);
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Total: €' + totalPrice;
}
