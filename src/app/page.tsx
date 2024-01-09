import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import Image from 'next/image';

export default async function Home() {
  const supabase = createServerActionClient({ cookies });
  const { data: tweets } = await supabase.from("tweets").select();

  return (
    //  Print out the tweets
    <pre>{JSON.stringify(tweets, null, 2)}</pre>
  )
}
