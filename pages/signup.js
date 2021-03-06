import React, { useState } from "react";
import Head from 'next/head'
import { useRouter }from 'next/router'

export default function Signup() {


    const router = useRouter();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            username,
            password,
        }

        setIsPending(true)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('user added')
            setIsPending(false)
            router.push('/dashboard')
        })

    }


    return (

        <div>
            <Head>
                <title>Async Chat / SIGNUP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
          
            <div class="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
                <div class="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
                    <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                        <div class="text-center mb-4">
                            <h6 class="font-semibold text-[#063970] text-xl">Login</h6>
                        </div>
                        <form class="space-y-5" method="POST">
                            {/* email */}
                            <div>
                                <label>Email</label>

                                <input id="email" type="text"
                                    required value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email..."
                                    class="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>
                            {/* username */}
                            <div>
                                <label>Username</label>

                                <input id="username" type="text"
                                    required value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="username..."
                                    class="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>
                            {/* password */}
                            <div>
                                <label>Password</label>

                                <input id="password" type="text"
                                    required value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password..."
                                    class="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>
                            {/* confirm password */}
                            <div>
                                <label>Confirm Password</label>

                                <input id="confirm_password" type="text"
                                    required value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="confirm password..."
                                    class="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>


                            {/* button */}
                            {!isPending && <button 
                            onClick={handleSubmit}
                            type="submit" class="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                                Signup
                            </button>}
                            {isPending && <button type="submit" class="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                                LOADINg
                            </button>}
                            <p>{username}</p>
                            <p>{password}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

