import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/router'

function profile() {

    const [profile, setProfile] = useState(null)
    const router = useRouter()


    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const profileData = await supabase.auth.user()
        if (!profileData) {
            router.push('/login')
        } else {
            setProfile(profileData)
            
        }
    }

    console.log(profile)

    async function signOut() {
        await supabase.auth.signOut()
        router.push('/login')
    }
    if (!profile) return null

    return (
        <div className='m-auto'>
            <h2>Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p>
            <p>User ID: {profile.id}</p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default profile