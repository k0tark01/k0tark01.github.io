function effectuerInscription() {
    api = "https://iyed.pythonanywhere.com/inscription";
    let nom = document.getElementById("firstname").value.trim();
    let prenom = document.getElementById("lastname").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let email = document.getElementById("email").value.trim();
    let mdp = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Check if any input field is empty
    if (nom === '' || prenom === '' || tel === '' || email === '' || mdp === '') {
        errorMessage.innerText = "Veuillez remplir tous les champs.";
        return; // Exit function if any field is empty
    }

    // Validate email format
    if (!validateEmail(email)) {
        errorMessage.innerText = "Veuillez saisir une adresse email valide.";
        return; // Exit function if email is not valid
    }

    // Construct the new user object
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
            window.location.href = "connexion.html"; // Change "login.html" to the actual URL of your login page
        } else {
            response.json().then(data => {
                errorMessage.innerText = `Cet email est déjà utilisé.`;
            });
        }
    })
    .catch(error => console.error('Erreur lors de la requête:', error));
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
