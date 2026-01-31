// apps/web/src/TestRules.tsx
import { type JSX } from "react";
import { useEffect, useState } from "react";

// ❌ ERROR de React Refresh: "only-export-components"
// Esta variable exportada rompe la regla porque no es un componente
export const someData = { id: 1 };

export function TestComponent(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    // ❌ ADVERTENCIA de React Hooks: "rules-of-hooks"
    // No se puede usar un hook dentro de un condicional
    if (count > 0) {
        useEffect(() => {
            console.log("Esto romperá el orden de los hooks");
        }, [])
    }

    return (
        <div onClick={() => setCount(count + 1)}>
            {count}
        </div>
    );
}