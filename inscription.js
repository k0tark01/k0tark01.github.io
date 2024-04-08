function effectuerInscription() {
    // Récupérer les valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;

    // Envoyer une requête au serveur pour effectuer l'inscription
    fetch('https://iyed.pythonanywhere.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nom: nom,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Afficher le message de la réponse dans la console
        /*// Vous pouvez également rediriger l'utilisateur vers une autre page ou effectuer d'autres actions ici
        chargerUtilisateurs(); // Recharger la liste des utilisateurs après l'inscription*/
    })
    .catch(error => console.error('Erreur lors de l\'inscription:', error));
}

/*
// Fonction pour charger les utilisateurs depuis le serveur
function chargerUtilisateurs() {
    fetch('https://yesser.pythonanywhere.com/')
        .then(response => response.json())
        .then(data => {
            // Manipuler les données des utilisateurs ici (par exemple, afficher dans la console)
            console.log(data);
        })
        .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
}

// Appeler la fonction pour charger les utilisateurs lors du chargement de la page
window.onload = chargerUtilisateurs;
*/