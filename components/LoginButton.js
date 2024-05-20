import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="absolute top-0 right-0 z-40 text-white">
        Signed in as {session.user.email} <br />
        <img className="rounded-full" src={session.user.image} alt={session.user.name}/>
        <br/>
        <p>{session.user.name}</p>
        
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}