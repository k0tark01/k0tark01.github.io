function effectuerInscription() {
    api = "https://iyed.pythonanywhere.com/inscription"
    let nom = document.getElementById("firstname").value;
    let prenom = document.getElementById("lastname").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let mdp = document.getElementById("password").value;

    let nouveau_utilisateur = {
        nom: nom,
        prenom: prenom,
        tel: tel,
        email: email,
        mdp: mdp
    };

    // Effectuer une requête POST vers l'API pour ajouter l'utilisateur
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nouveau_utilisateur)
    })
    .then(response => {
        if (response.status === 201) {
            console.log("OK");
            // Rediriger l'utilisateur vers la page de connexion
            window.location.href = "login.html"; // Change "login.html" to the actual URL of your login page
        } else {
            response.json().then(data => {
                document.getElementById("error-message").innerText = `Cet email est déjà utilisé ${data.message}`;
            });
        }
    })
    .catch(error => console.error('Erreur lors de la requête:', error));
}
