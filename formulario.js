function cleanText(text) {
    // Remueve espacios en blanco al inicio y al final del texto
    return text.trim();
}
function Mayusculas(text) {
    // Mayusculas la primera letra de cada palabra en el texto
    return text.replace(/\b\w/g, function (letra) {
        return letra.toUpperCase();
    }); 
}
function formatDisplayName(text) {
    // Formatea el nombre para mostrarlo en mayúsculas y con la primera letra de cada palabra en mayúscula
    let cleanedText = cleanText(text);
    let capitalizedText = Mayusculas(cleanedText);
    return capitalizedText;
}

console.log(formatDisplayName("   Mariana Zambrano   ")); // Output: "Mariana Zambrano"
console.log(formatDisplayName("   Kenny Rojas   ")); // Output: "Kenny Rojas"
console.log(formatDisplayName("   Juan Perez   ")); // Output: "Juan Perez"
