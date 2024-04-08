const productsData = [
  { "id": 1, "name": "Produit 1", "price": 20.99, "image": "", "details": "Détails du produit 1" },
  { "id": 2, "name": "Produit 2", "price": 30.50, "image": "", "details": "Détails du produit 2" },
  { "id": 3, "name": "Produit 3", "price": 15.75, "image": "", "details": "Détails du produit 3" }
  // Ajoute autant d'objets que nécessaire
];

const buyButton = document.getElementById('buy-button');
const fav = document.getElementById('favorite-button');

// Récupère l'ID du produit à partir de l'URL
const productId = new URLSearchParams(window.location.search).get('id');

// Trouve le produit correspondant dans les données des produits
const product = productsData.find(product => product.id.toString() === productId);

// Affiche les détails du produit sur la page
const productDetailsContainer = document.getElementById('product-details');
if (product) {
  productDetailsContainer.innerHTML = `
    <h2>${product.name}</h2>
    <p>Prix: $${product.price.toFixed(2)}</p>
    <img src="${product.image}" alt="${product.name}" style="max-width: 200px; max-height: 200px;">
    <p>${product.details}</p>
  `;
} else {
  productDetailsContainer.innerHTML = '<p>Produit non trouvé</p>';
}

fav.addEventListener('click', () => {
  alert(`${product.name} ajouté aux favoris`);
});
