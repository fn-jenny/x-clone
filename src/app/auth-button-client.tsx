'use client'

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Session is  props passed from AuthButtonServer
export default function AuthButtonClient({ session } : { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter(); 

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }      
    })    
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  }

  return session ? (    
    <button onClick={handleSignOut}>Log Out</button>
  ) : (
    <button onClick={handleSignIn}>Login</button>            
  )

}