import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZXNvd3hsZGNnZ21kcmdmbnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMyNTU1NDgsImV4cCI6MTk2ODgzMTU0OH0.xDMsnNa15JKyQKPl74XtVwhlW-1ZfwJQqOrrUBW4fng'


const SUPABASE_URL = "https://kresowxldcggmdrgfnro.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function loginWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        // provider can be 'github', 'google', 'gitlab', and more
        provider: 'google'
      })

}

function logout() {
    const { error } = await supabase.auth.signOut()
}