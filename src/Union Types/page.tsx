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

type AddressProps = {
    city: string;
    zipCode: string;
}

// Interface seria extends
type CustomerProps = PersonProps & ContactProps & AddressProps;

type CustomerOrProps = PersonProps | ContactProps | AddressProps;

export default function TypePage() {
    const handleSaveCustom = (customer: CustomerProps) => {
        console.log(customer);
    }

    handleSaveCustom({
        age: 30,
        city: "São Paulo",
        doc: "123",
        email: "email",
        name: "Vitor Hugo",
        phone: "999999999",
        zipCode: "23123123"
    })

    const handleSaveCustomOr = (customer: CustomerOrProps) => {
        console.log(customer);
    }

    handleSaveCustomOr({
        name: "Vitor Hugo",
        doc: "123",
        age: 30,
        email: "email",
        phone: "999999999",
    })

    return (
        <div>
            <h2>Conceitos typescript: Intersection Types</h2>
        </div>
    )
}