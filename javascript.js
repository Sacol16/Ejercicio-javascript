const compararNumeros = () => {
    return new Promise((resolve, reject) => {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));
        const num3 = parseFloat(prompt("Ingrese el tercer número:"));

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            reject("Por favor, ingrese números válidos.");
        } else {
            resolve([num1, num2, num3]);
        }
    });
};

const obtenerMenor = (num1, num2, num3) => 
    num1 < num2 && num1 < num3 ? num1 : num2 < num1 && num2 < num3 ? num2 : num3;

const verificarIguales = (num1, num2, num3) =>
    num1 === num2 ? `Número 1 y Número 2 son iguales: ${num1}` :
    num1 === num3 ? `Número 1 y Número 3 son iguales: ${num1}` :
    num2 === num3 ? `Número 2 y Número 3 son iguales: ${num2}` :
    "No hay números iguales";

compararNumeros()
    .then(([num1, num2, num3]) => {
        const menor = obtenerMenor(num1, num2, num3);
        const iguales = verificarIguales(num1, num2, num3);
        document.getElementById("resultado").innerText = `El menor número es: ${menor}. ${iguales}.`;
    })
    .catch(error => {
        document.getElementById("resultado").innerText = error;
    });
