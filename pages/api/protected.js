import { supabase } from "../../client";

export default function Profile() {


}

export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if(!user) {
        return { props: {}, redirect: { destination: '/login'}}
    }

    return { props: { user }}
}