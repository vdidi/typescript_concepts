import React from "react";

type ButtonProps = {
    name: string;
    color: string;
    type: string;
}

// É o mesmo que:

type ButtonRecordProps = Record<'name' | 'color' | 'type', string>;

type Day = 'Domingo' | 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado';

type EveryDayCode = Record<Day, 'code'>;

export default function TypePage() {
    return (
        <div>
            <h2>Conceitos typescript: Record</h2>
        </div>
    )
}
