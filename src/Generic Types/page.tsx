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

export default function TypePage() {
    const person: PersonProps = {name: 'Junior', age: 30, doc: "321"};
    const contact: ContactProps = {phone: '333333331', email: "email"};
    exampleFunction(person);
    exampleFunction(contact);

    return (
        <div>
            <h2>Conceitos typescript: Intersection Types</h2>
        </div>
    )
}
