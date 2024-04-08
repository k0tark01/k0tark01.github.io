const productsData = [
  { "id": 1, "name": "Produit 1", "price": 20.99, "image": "", "details": "Détails du produit 1" },
  { "id": 2, "name": "Produit 2", "price": 30.50, "image": "", "details": "Détails du produit 2" },
  { "id": 3, "name": "Produit 3", "price": 15.75, "image": "", "details": "Détails du produit 3" }
  // Ajoute autant d'objets que nécessaire
];

// Supposons que tu récupères les informations de l'utilisateur depuis un objet utilisateur
const utilisateur = {
  nom: "Doe",
  prenom: "John",
  telephone: "911"
};

// Met à jour les éléments HTML avec les informations de l'utilisateur
document.getElementById('nom').textContent = utilisateur.nom;
document.getElementById('prenom').textContent = utilisateur.prenom;
document.getElementById('telephone').textContent = utilisateur.telephone;



const productsContainer = document.getElementById('products-container');

productsData.forEach(product => {
  const productElement = document.createElement('div');
  productElement.innerHTML = `
    <a href="product-details.html?id=${product.id}">
      <p>${product.name} - $${product.price.toFixed(2)}</p>
      <img src="${product.image}" alt="${product.name}" style="max-width: 100px; max-height: 100px;">
    </a>
  `;
  productsContainer.appendChild(productElement);
});
