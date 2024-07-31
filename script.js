let form = document.querySelector('form'); 
form.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault(); 
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let message = document.getElementById("message").value;

  // créer une alerte si un champ n'est pas rempli
  if ((firstName == "") || (lastName == "") || (message == "")) {
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    // Ajouter le contenu du formulaire à la page
    let commentDiv = document.getElementById("comment-list");
    let copyDiv = commentDiv.lastElementChild;
    let cloneDiv = copyDiv.cloneNode(true);

    cloneDiv.querySelector("h3").innerText = firstName + " " + lastName;
    cloneDiv.querySelector("p").innerText = message;

    commentDiv.appendChild(cloneDiv);
  }
   //Supprimer le contenu des champs du formulaire
   form.reset();
} 