import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonClient from "./auth-button-client";

// Creating this auth Button server for getting session state from the server
// Then rendering the client component with the state from the server to allow clickable button
// This is a wworkaround for getting the session available on first render on client side
export default async function AuthButtonServer() {
  const supabase = createServerComponentClient<Database>({cookies})
  const { 
    data : { session },
  } = await supabase.auth.getSession();

  return <AuthButtonClient session={session} />
}