'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Ops! Algo deu errado.</h1>
      <p className="text-lg mb-8">Parece que ocorreu um problema. Tente novamente mais tarde ou volte à página inicial.</p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
