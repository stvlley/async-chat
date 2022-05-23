import React, { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Dashboard({users}) {




    return (
        <div >

            <Head>
                <title>Async Chat / DASHBOARD</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gradient-to-b from-[#063970] to-blue-200 flex min-h-screen flex-col items-center justify-center py-2">
                <h1>Dashboard</h1>
                <div className='flax conatiner'>
                <button>Click me</button>
                </div>
            </div>
        </div>
    )
}
