import React, { useState } from "react";
import Head from 'next/head'
import { useRouter }from 'next/router'
import { supabase } from "../client";


export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

    async function signIn() {
        const { error, data} = await supabase.auth.signIn({
            email
        })
        if ( error ) {
            console.log({error})
        } else {
            setSubmitted(true)
            router.push('/profile')
        }
    }

    return (

        <div>
            <Head>
                <title>Async Chat / LOGIN</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
                   {submitted && <div className="p-4 my-3 rounded-md text-white bg-yellow-600">X Check email to complete sign it</div>}
                   
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                        <div className="text-center mb-4">
                            <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
                        </div>
                        <form onSubmit={signIn} className="space-y-5" >
                        <div>
                                <label>Email</label>

                                <input id="email" type="email"
                                    required value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email..."
                                    className="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>

                            {/* <div>
                                <label>Username</label>

                                <input id="username" type="text"
                                    required value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="username..."
                                    className="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>

                            <div>
                                <label>Password</label>

                                <input id="password" type="password"
                                    required value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password..."
                                    className="block w-full py-3 px-3 mt-2
                                text-gray-800 appearance-none
                                border-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div> */}


                            {/* button */}
                            <button onClick={signIn}
                             type="submit" className="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                                Login
                            </button>
                            
                            <p>{username}</p>
                            <p>{password}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

