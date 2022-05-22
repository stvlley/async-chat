import React, { useEffect, useState } from "react";
import {signIn, useSession} from 'next-auth/react'


const Navbar = () => {

    // const user = session.user

    const {session, loading} = useSession()
    
    return (
        <nav>
            <button onClick={() => signIn()}>Login</button>
        </nav>
    )
}

export default Navbar;