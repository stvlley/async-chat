import '../styles/globals.css'
import { useState, useEffect} from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'


export default function App({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState]= useState('not-authenticated')
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session)
      if(event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        router.push('/profile')
      }
      if (event === 'SIGN_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })

    checkUser()
    return() => {
      authListener.unsubscribe()
    }
  }, [])

  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }
  async function handleAuthChange(event ,session) {
    await fetch('api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({event, session })
    })
  }

  return (
    <div>
      <Navbar authenticatedState={authenticatedState} />
      <Component {...pageProps} />
    </div>


  )
}
