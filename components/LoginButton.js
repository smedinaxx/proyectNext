import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LoginButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: '/' }).then(() => {
      // No es necesario hacer algo aquí ya que redirige automáticamente
    });
  };

  return session ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
<div className="flex flex-col items-center space-y-4"> {/* Flexbox para colocar botones en columna y espacio entre ellos */}
<button
        onClick={() => handleSignIn('google')}
        className="flex items-center text-black bg-white border border-black py-2 px-4 rounded-md hover:scale-105 transition duration-300"
      >
        <Image
          src="/googlelogo.svg"
          alt="Google Logo"
          width={24}
          height={24}
          className="mr-4"
        />
        Sign in with Google
      </button>
      <button
        onClick={() => handleSignIn('github')}
        className="flex items-center text-black bg-white border border-black py-2 px-4 rounded-md hover:scale-105 transition duration-300"
      >
        <Image
          src="/githublogo.svg"
          alt="GitHub Logo"
          width={24}
          height={24}
          className="mr-4"
        />
        Sign in with GitHub
      </button>
    </div>
  );
}
