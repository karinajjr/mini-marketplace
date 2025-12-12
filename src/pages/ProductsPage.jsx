import { useEffect} from "react";

export default function ProductsPage() {
  useEffect(() => { 
    const container = document.getElementById("products-container");
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => {
        container.innerHTML = "";
        products.forEach(product => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
            <div class="img-wrapper">
             <img src="${product.image}" alt="${product.title}" />
            </div>      
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="add-btn"
              data-id="${product.id}"
              data-title="${product.title}"
              data-price="${product.price}"
              data-image="${product.image}">
              Add to Cart
            </button>
          `;
          container.appendChild(card);
        });


        container.querySelectorAll(".add-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const existing = cart.find(item => item.id === btn.dataset.id);
            if (!existing) {
              cart.push({
                id: btn.dataset.id,
                title: btn.dataset.title,
                price: parseFloat(btn.dataset.price),
                image: btn.dataset.image
              });
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Added to cart!");
            } else {
              alert("Item already in cart");
            }
          });
        });
      });
  }, []);

  return <div id="products-container" className="products-grid"></div>;
}
