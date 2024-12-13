const items = [
    { name: "Jinx", price: 150 },
    { name: "Vi", price: 200 },
    { name: "Caitlyn", price: 180 },
    { name: "Ekko", price: 170 },
    { name: "Jayce", price: 250 }
];
const cart = [];
const itemList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
function displayItems() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} Kč`;
        li.setAttribute("data-index", index);
        itemList.appendChild(li);
    });
}
function addToCart() {
    const input = document.getElementById("add-item").value.trim();
    const itemIndex = items.findIndex(i => i.name.toLowerCase() === input.toLowerCase());
    if (itemIndex === -1) {
        alert("Položka nebyla nalezena v nabídce.");
        return;
    }
    const item = items[itemIndex];
    cart.push(item);
    items.splice(itemIndex, 1);
    updateCart();
    displayItems();
    document.getElementById("add-item").value = "";
}
function updateCart() {
    cartList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} Kč`;
        cartList.appendChild(li);
    });
    totalPriceElement.textContent = totalPrice;
}
function clearCart() {
    while (cart.length > 0) {
        items.push(cart.pop());
    }
    updateCart();
    displayItems();
}
window.onload = function () {
    displayItems();
};
