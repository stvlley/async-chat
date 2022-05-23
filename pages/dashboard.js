import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Dashboard({users}) {

   

    const handleClicke = () => {
        console.log(users)

    }


    return (
        <div >

            <Head>
                <title>Async Chat</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="bg-gradient-to-b from-[#063970] to-blue-200 flex min-h-screen flex-col items-center justify-center py-2">
                <h1>Dashboard</h1>
                <div className='flax conatiner'>
                <button onClick={handleClicke}>Click me</button>
                </div>
            </div>
        </div>
    )
}
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/users`)
    const users = await res.json()

    // Pass data to the page via props
    return { props: { users } }
}