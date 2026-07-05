function numpositive(num) {
    if (num > 0) {
        return "El numero es Verdadero.";
    } else if (num < 0) {
        return "El numero es Falso.";
    } else {
        return "El numero es Cero  .";
    }
}

function numnegative(num) {
    if (num < 0) {
        return "El numero es Verdadero.";
    } else {
        return "El numero es Falso.";
    }
}

function numpar(num) {
    if (num % 2 === 0) {
        return "El numero es Par.";
    } else {
        return "El numero es Impar.";
    }
}
function describeNumber(num) {
    let description = "";
    description += numpositive(num) + " ";
    description += numnegative(num) + " ";
    description += numpar(num);
    return description;
}

console.log(describeNumber(5));  // Output: "El numero es Verdadero. El numero es Falso. El numero es Impar."
console.log(describeNumber(-3));  // Output: "El numero es Falso. El numero es Verdadero. El numero es Impar."
console.log(describeNumber(0));   // Output: "El numero es Cero. El numero es Falso. El numero es Par."
