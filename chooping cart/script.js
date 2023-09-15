let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

// Define a cart object to store product quantities
let cart = {};

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    let name = product.getAttribute("data-name");
    let image = product.querySelector("img").src;
    let title = product.querySelector("h3").textContent;
    let priceText = product.querySelector(".price").textContent;
    
    // Extract the price as a number from the priceText
    let price = parseFloat(priceText.replace(/[^\d.]/g, '')); 

    // Check if the product already exists in the cart
    let existingProduct = cart[name];

    if (!existingProduct) {
      // If it doesn't exist, create a new entry with quantity 1
      cart[name] = {
        name: name,
        image: image,
        title: title,
        price: price,
        quantity: 1, // Initial quantity is 1
      };
    } else {
      // If it exists, increment the quantity
      existingProduct.quantity++;
    }

    preveiwContainer.style.display = "flex";
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

document.querySelectorAll(".cartBtn").forEach((cartBtn) => {
  cartBtn.onclick = () => {
    const target = cartBtn.getAttribute("data-target");

    // Find the product data in the cart object based on the 'data-target' attribute (name)
    const productData = cart[target];

    if (productData) {
      // Increment the quantity when "Add to Cart" button is clicked
      productData.quantity++;
      
      // Update the cart count displayed in the shopping cart icon
      updateCartCount();

      // Update the popup content
      updatePopupContent();
    }
  };
});

function updateCartCount() {
  let totalCount = 0;
  for (let key in cart) {
    totalCount += cart[key].quantity;
  }
  document.getElementById("count").textContent = totalCount;
}

function updatePopupContent() {
  const popupContent = document.getElementById("popup-content");
  const cartTotal = document.getElementById("cart-total");
  let totalPrice = 0;

  // Clear existing content in the popup
  popupContent.innerHTML = '';

  // Iterate through the items in the cart
  for (let key in cart) {
    const item = cart[key];
    const itemTotal = item.quantity * item.price;

    // Create a div to represent the item in the popup
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img style="height:70px; width:70px" src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.title}</h3>
        <p>Price: ${item.price.toFixed(2)} $</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: ${itemTotal.toFixed(2)} $</p>
      </div>
    `;

    // Append the item div to the popup content
    popupContent.appendChild(itemDiv);

    // Update the total price
    totalPrice += itemTotal;
  }

}

const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-popup-button");
const openButton = document.getElementById("open-popup-button");
const productContainer = document.getElementById("product-container");
const popupContent = document.getElementById("popup-content");
// const productQuantity = document.getElementById('product-quantity');
// const quantity = document.getElementById('quantity');

// Function to open the popup
function openPopup() {
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
