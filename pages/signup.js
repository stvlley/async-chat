import React, { useState } from "react";

export default function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log('clicked')
    }



    return (
        <div className="bg-gradient-to-b from-[#063970] to-blue-200">
            <div>
                
            </div>
         
        </div>
    )
}

