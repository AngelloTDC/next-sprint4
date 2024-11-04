"use client";

import { Contact } from "@/utils/contact";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface IFormContactProps {
  contact?: Contact;
}

export const FormContact = ({ contact }: IFormContactProps) => {
  const router = useRouter();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contact);
    await new Promise((resolve) =>
      resolve(setTimeout(() => setIsSubmitted(true), 1000))
    );
  };

  return (
    <>
      {isSubmitted ? (
        <div className="text-center text-white">
          <p className="text-2xl mb-4">Mensagem enviada com sucesso!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 text-white"
            >
              Enviar outra mensagem
            </button>
            <button
              onClick={() => router.push("/contato")}
              className="px-6 py-2 bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300 text-white"
            >
              Voltar
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-white mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite seu email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telefone" className="text-white mb-1">
              Número de Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="(99) 99999-9999"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensagem" className="text-white mb-1">
              Motivo do Contato
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              required
              className="p-3 rounded-2xl border border-gray-300 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Escreva sua mensagem"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 active:bg-blue-800"
          >
            Enviar
          </button>

          <button
            onClick={() => router.push("/contato")}
            type="button"
            className="w-full p-3 mt-4 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300"
          >
            Voltar
          </button>
        </form>
      )}
    </>
  );
};
