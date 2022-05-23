import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function dashboard() {
    return (
        <div >

            <Head>
                <title>Async Chat</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="bg-gradient-to-b from-[#063970] to-blue-200 flex min-h-screen flex-col items-center justify-center py-2">

            </div>
        </div>
    )
}
