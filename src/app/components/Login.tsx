import React from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-screen">
              <p className="text-lg font-semibold">Loading...</p>
           </div>;
  }

  if (status !== 'authenticated') {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-100 p-6">
        <p className="text-xl font-semibold text-gray-700">ログイン</p>
        <button
          onClick={() => signIn('google', {}, { prompt: 'login' })}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Googleでログイン
        </button>
      </div>
    );
  }

  return null;
}
