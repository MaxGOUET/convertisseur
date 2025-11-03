// on recupére les données du html

let toConvertValueOne = document.getElementById("toConvertValueOne");
console.log(toConvertValueOne);

let toConvertValueTwo = document.getElementById("toConvertValueTwo");
console.log(toConvertValueTwo);

let valueOne = document.getElementById("valueOne");
console.log(valueOne);

let valueTwo = document.getElementById("valueTwo");
console.log(valueTwo);

// on empeche le comportement par défaut et on affiche le resultat
function showResult() {
  toConvertValueOne.addEventListener("keyup", (event) => {
    const result = toConvertValueOne.value;
    validateConvert(result);
    calculation(event.target);
    if (toConvertValueTwo.value == "NaN") {
      toConvertValueOne.style.color = "red";
    } else {
      toConvertValueOne.style.color = "black";
    }
  });
  toConvertValueTwo.addEventListener("keyup", (event) => {
    const result = toConvertValueTwo.value;
    validateConvert(result);
    calculation(event.target);
    if (toConvertValueOne.value == "NaN") {
      toConvertValueTwo.style.color = "red";
    } else {
      toConvertValueTwo.style.color = "black";
    }
  });
}
// on mets des régles concernant les caractères acceptés et on renvoi la valeur de toConvertValue
function validateConvert(result) {
  let regex = new RegExp("[0-9.,]+");
  if (!(resultConvert = regex.test(result))) {
    toConvertValueOne.value = "";
    toConvertValueTwo.value = "";
  }
}

// on calcule et on affiche le resultat dans la zone showResult
function calculation(target) {
  if (target.id == "toConvertValueOne") {
    let resultDollar = toConvertValueOne.value * "1.15";
    toConvertValueTwo.value = Math.round(resultDollar * 100) / 100;
  } else {
    let resultEuro = toConvertValueTwo.value / "1.15";
    toConvertValueOne.value = Math.round(resultEuro * 100) / 100;
  }
}
