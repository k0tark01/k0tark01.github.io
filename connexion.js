function verifierConnexion() {
    // Récupérer les valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;

    // Envoyer une requête au serveur pour vérifier la connexion
    fetch('https://iyed.pythonanywhere.com/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Vérifier si le nom et l'email existent dans la base de données
        var utilisateurExiste = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].nom === nom && data[i].email === email) {
                utilisateurExiste = true;
                break;
            }
        }

        // Afficher le résultat dans la console
        if (utilisateurExiste) {
            console.log("Utilisateur existant");
        } else {
            console.log("Utilisateur non trouvé");
        }
    })
    .catch(error => console.error('Erreur lors de la vérification de la connexion:', error));
}

