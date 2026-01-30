import { useState } from 'react'; // Error: React no debería estar en la API

// 1. Error de Stylistic: Falta punto y coma, espacios extras, comillas dobles
const saludo = 'hola'

// 2. Error de TS: Variable declarada pero nunca usada (no-unused-vars)
// 3. Error de TS: Falta el tipo de retorno en función exportada
export function suma(a: number, b: any) {
    const valorInutil = 10;
    return a + b;
}

// 4. Error de React Hooks (si usas el config de React): 
// Llamar un hook fuera de un componente o de forma condicional
if (saludo) {
    const [data] = useState(null);
}

/* 5. Error de Base: Consola (si pusiste 'no-console': 'error')
*/
console.log(saludo);