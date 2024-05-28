import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-white flex justify-center bg-black py-4">
        Signed in as {session.user.email} <br />
        <img className="rounded-full w-12" src={session.user.image} alt={session.user.name}/>
        <br/>
        <p>{session.user.name}</p>
        
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="text-white flex justify-center bg-black py-4">
      <p className="mr-3">Not signed in: </p>
      <button className="underline underline-offset-4" onClick={() => signIn()}>Sign in</button>
    </div>
  )
}