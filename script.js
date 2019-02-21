// Funzione che fa la somma degli elementi di un array
function sumArrayElements(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
// FUNZIONE CHE CHIEDE NUMERI DA INSERIRE IN UN ARRAY FINO A CHE LA SOMMA NON SUPERA I 50
function askNumElementsWhileSum() {
  var nums = [];
  var n;
  do {
    n = prompt("Dammi un numero da mettere nell'array");
    nums.push(n);
  } while (sumArrayElements(nums) < 50);
  return nums;
}

//Inserisce in un array tutti i numeri non multipli di 11
function getNoMultiple11() {
 access = true;
 var somma = [];
  while (access) {
    var n = prompt("Dammi un numero:");
    if (n % 11 != 0) {
      n = Number(n);
      somma.push(n);
    }
    else {
      alert("Hai inserito un multiplo di 11");
      access = false;
    }
  }
  return somma;
}

//Moltiplico tutti i numeri di un ARRAY
function multiArrayElements(arr) {
  var base = 1;
  for (var i = 0; i < arr.length; i++) {
    base *= Number(arr[i]);
  }
  return base;
}

//Moltiplicazione di tutti i numeri non superiore a 500
function isMultiLessOf500() {
 access = true;
 var data = [];
  while (access) {
    var n = prompt("Dammi un numero:");
    if (multiArrayElements(data) < 500 && n != 0) {
      n = Number(n);
      data.push(n);
    }
    else {
      var valoreValido = 1;
      alert("Non puoi più inserire numeri. Valore Raggiunto: " + multiArrayElements(data));
      for (var i = 0; i < data.length-1; i++) {
        valoreValido = valoreValido * data[i];
      }
      alert("Il tuo ultimo numero valido è " + valoreValido);
      access = false;
    }
  }
  return data;
}

console.log(isMultiLessOf500());
