import React from "react";

type PersonProps = {
    name:string;
    doc: string;
    age: number;
}

type PersoWithoutDocProps = Omit<PersonProps, 'doc'>

export default function TypePage() {
    const handleSaveDocument = (customer: PersoWithoutDocProps) => {
        console.log(customer);
    }

    handleSaveDocument({
        name: "Vitor Hugo",
        age: 30,
    })

    return (
        <div>
            <h2>Conceitos typescript: Intersection Types</h2>
        </div>
    )
}
