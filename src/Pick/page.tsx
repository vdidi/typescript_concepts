import React from "react";

export default function TypePage() {
    function double(a: number | undefined) {
        if(typeof a === "number") {
            return `Resultado = ${a * 2}`;
        }

        throw new Error(`Erro: não foi possível calcular o dobro de ${a}`)
    }

    double(2);
    double(undefined);

    return (
        <div>
            <h2>Conceitos typescript: Intersection Types</h2>
        </div>
    )
}
