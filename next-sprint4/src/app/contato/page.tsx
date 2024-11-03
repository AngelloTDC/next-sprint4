export default function Contato() {
  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Fale com a gente!</h1>
      <form
        className="flex flex-col gap-4"
        action="https://example.com/submit" // URL DA API PRECISA IR AQUI
        method="POST"
      >
        <div className="flex flex-col">
          <label htmlFor="nome" className="text-white mb-1">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-white mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone" className="text-white mb-1">Número de Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            className="p-3 rounded-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mensagem" className="text-white mb-1">Motivo do Contato</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            required
            className="p-3 rounded-2xl border border-gray-300 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
