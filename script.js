function valeur() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var valeur = firstNumber % secondNumber;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Veuillez saisir uniquement un nombre");
  } else {
    alert(valeur);
  }
}
