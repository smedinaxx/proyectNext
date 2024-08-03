import { useState } from 'react';
import { useRouter } from 'next/router';
import LoginButton from '../components/LoginButton';
import Link from 'next/link';
import { BackgroundBeams } from "../components/ui/BackgroundBeams";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'; // Usa la variable de entorno

        const response = await fetch(`${apiUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User registered:', data);
            setMessage('Registration successful! Redirecting...');
            // Redirigir al inicio después de un registro exitoso
            setTimeout(() => {
                router.push('/');
            }, 2000); // Espera 2 segundos para mostrar el mensaje
        } else {
            console.error('Error registering user');
            // Mostrar un mensaje de error aquí
        }
    };

    return (
        <div className="bg-gradient-to-r from-black to-neutral-900 flex items-center justify-center min-h-screen">
            <BackgroundBeams />
            <div className="text-black p-2 py-6 rounded-lg shadow-lg w-full max-w-md border border-purple-700">
                <form onSubmit={handleSubmit} className="bg-transparent flex flex-col text-black">
                    <input
                        className="mb-4 p-3 border border-gray-300 rounded-md"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="mb-4 p-3 border border-gray-300 rounded-md"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="mb-4 p-3 border border-gray-300 rounded-md"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="mb-4 w-full py-3 text-white bg-black border border-purple-500 rounded-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition duration-300"
                    >
                        Register now
                    </button>
                    <div className="text-center">
                        <p className="text-white mb-2">Do you have an account?</p>
                        <LoginButton />
                        <Link href={"/"}>
                            <button className='text-purple-500 flex'>Back home</button>
                        </Link>
                    </div>
                </form>

                {message && <p className="text-center text-green-500 mt-4">{message}</p>} {/* Mostrar el mensaje aquí */}
            </div>
        </div>
    );
}
