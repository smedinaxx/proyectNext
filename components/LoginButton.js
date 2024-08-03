import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    signIn().then(() => {
      router.push('/'); // Redirige al inicio después de iniciar sesión
    });
  };

  return session ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
    <button onClick={handleSignIn} className="text-purple-500">Log in here</button>
  );
}
