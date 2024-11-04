"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContatoUnidade() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const unidades = {
    unidade1: 'Unidade Paulista',
    unidade2: 'Unidade Aclimação',
    unidade3: 'Unidade Campos Elíseos',
    unidade4: 'Unidade Campos Elíseos 2',
  };

  const unidadeDescricao = unidades[id as keyof typeof unidades] || 'Unidade desconhecida';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Fale com a {unidadeDescricao}
      </h1>
      
      {isSubmitted ? (
        <div className="text-center text-white">
          <p className="text-2xl mb-4">Mensagem enviada com sucesso!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 text-white">
              Enviar outra mensagem
            </button>
            <button
              onClick={() => router.push('/contato')}
              className="px-6 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300 text-white">
              Voltar
            </button>
          </div>
        </div>
        ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-white mb-1">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu nome"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu email"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="telefone" className="text-white mb-1">Número de Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="(99) 99999-9999"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensagem" className="text-white mb-1">Motivo do Contato</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              required
              className="p-3 rounded-2xl border border-gray-300 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Escreva sua mensagem"/>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 active:bg-blue-800">
            Enviar
          </button>

          <button
            onClick={() => router.push('/contato')}
            type="button"
            className="w-full p-3 mt-4 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300">
            Voltar
          </button>
        </form>
      )}
    </div>
  );
}
