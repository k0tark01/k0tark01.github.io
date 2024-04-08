document.getElementById('product-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;
  const price = parseFloat(document.getElementById('price').value);

  // Vérifier si les données sont valides
  if (name && description && image && !isNaN(price) && price >= 0) {
    const productData = {
      name: name,
      description: description,
      image: image,
      price: price
    };

    // Envoi des données JSON à l'API (simulation)
    console.log('Données JSON à envoyer à l\'API:', JSON.stringify(productData));

    // Redirection vers main.html
    window.location.href = 'main.html';

    // Affichage d'un message de confirmation
    alert('Le produit a été publié avec succès !');
  } else {
    // Affichage d'un message d'erreur si le formulaire est incomplet ou incorrect
    alert('Veuillez remplir tous les champs correctement.');
  }
});
