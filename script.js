// on recupére les données du html

let toConvertValue = document.getElementById("toConvertValue");
console.log(toConvertValue);

let valueOne = document.getElementById("valueOne");
console.log(valueOne);

let valueTwo = document.getElementById("valueTwo");
console.log(valueTwo);

let zoneSubmit = document.getElementById("convert");
console.log(zoneSubmit);

let zoneResult = document.querySelector(".showResult");
console.log(zoneResult);

// on empeche le comportement par défaut et on affiche le resultat
function showResult() {
  let sendForm = document.querySelector(".form");
  sendForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = toConvertValue.value;
    validateConvert(result);
    calculation();
  });
}
// on mets des régles concernant les caractères acceptés et on renvoi la valeur de toConvertValue
function validateConvert(result) {
  let regex = new RegExp("[0-9.,]+");
  if (!(resultConvert = regex.test(result))) {
    console.log("erreur");
  } else {
    console.log(toConvertValue.value);
  }
}

// on force le changement des zone select euro et dollar
function autoChangeEuroDollar() {
  valueOne.addEventListener("change", (event) => {
    if (!(valueOne.value == "euro")) {
      valueTwo.value = "euro";
    } else {
      valueTwo.value = "dollar";
    }
  });

  valueTwo.addEventListener("change", (event) => {
    if (!(valueTwo.value == "dollar")) {
      valueOne.value = "dollar";
    } else {
      valueOne.value = "euro";
    }
  });
}

// on calcule et on affiche le resultat dans la zone showResult
function calculation() {
  if (valueOne.value == "euro") {
    let resultDollar = toConvertValue.value * "1.15";
    zoneResult.innerText = Math.round(resultDollar * 100) / 100 + "$";
  } else {
    let resultEuro = toConvertValue.value / "1.15";
    zoneResult.innerText = Math.round(resultEuro * 100) / 100 + "€";
  }
}
