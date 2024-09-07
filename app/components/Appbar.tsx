"use client";

import { signIn, useSession , signOut} from "next-auth/react"
export function Appbar(){
    const session = useSession();
    return <div>
        <div className="flex justify-between">
           <div>
           TuneWave
           </div>
           <div>
            {session.data?.user &&  <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>Logout</button>}
            {!session.data?.user &&  <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>Sign In</button>}
            
           </div>
        </div>
    </div>
}