const publishedProducts = [
  { "id": 1, "name": "Produit 1", "price": 1.99, "image": "", "details": "Détails du produit 1" },
  { "id": 2, "name": "Produit 2", "price": 5.50, "image": "", "details": "Détails du produit 2" },
  { "id": 3, "name": "Produit 3", "price": 3.75, "image": "", "details": "Détails du produit 3" }
  // Ajoute autant d'objets que nécessaire
];

const published_products = document.getElementById('published-products');

publishedProducts.forEach(product => {
  const productElement = document.createElement('div');
  productElement.innerHTML = `<br>
    <a href="product-details.html?id=${product.id}">
      <p>${product.name} - $${product.price.toFixed(2)}</p>
      <img src="${product.image}" alt="${product.name}" style="max-width: 100px; max-height: 100px;">
    </a>
  `;
  published_products.appendChild(productElement);
});
