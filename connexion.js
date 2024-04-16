function verifierConnexion() {
    // Récupérer les valeurs du formulaire
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Envoyer une requête au serveur pour vérifier la connexion
    fetch('https://iyed.pythonanywhere.com/connexion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, mdp: password }) // Send email and password to server
    })
    .then(response => {
        if (response.ok) {
            // Redirect to "comingsoon.html" if login is successful
            window.location.href = 'soon.html'; 
        } else {
            console.log("Utilisateur non trouvé ou mot de passe incorrect");
            // Handle unsuccessful login
        }
    })
    .catch(error => console.error('Erreur lors de la vérification de la connexion:', error));
}
