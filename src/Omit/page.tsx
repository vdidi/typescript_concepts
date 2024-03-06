import React from "react";

type PersonProps = {
    name:string;
    doc: string;
    age: number;
}

type ContactProps = {
    phone: string;
    email: string;
}

function exampleFunction<T>(args: T): T {
    console.log('args', args);
    return args;
}
type DocumentProps = Pick<PersonProps, 'doc'>

export default function TypePage() {
    const handleSaveDocument = (customer: DocumentProps) => {
        console.log(customer);
    }

    handleSaveDocument({
        doc: "123",
    })

    return (
        <div>
            <h2>Conceitos typescript: Intersection Types</h2>
        </div>
    )
}
