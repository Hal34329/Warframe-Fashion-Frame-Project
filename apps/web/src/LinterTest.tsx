import React, { useState, useEffect } from 'react' // Mal: Comillas simples, sin punto y coma

export const LinterTest = () => {
    const [data, setData] = useState<any>(null); // Error: Uso de 'any'
    const _unusedVar = "test"; // Warning: Variable no usada (pero permitida por tu patrón ^_)
    const badVar = 'soy una cadena'; // Mal: Comillas simples, mala indentación (2 espacios)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.test.com")
            const result = await response.json() // Mal: Sin punto y coma, indentación inconsistente
            setData(result)
        };
        fetchData()
    }, []) // Error: react-hooks/exhaustive-deps (si no incluyes dependencias)

    function computeSomething(a: number, b: number) {
        return a + b; // Mal: Indentación de 2 espacios en lugar de 4
    }

    return (
        <div className={'test'}>
            <h1>{badVar}</h1>
        </div>
    );
};