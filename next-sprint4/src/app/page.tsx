export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Porto-AutoHelp</h1>
      <p className="text-lg leading-relaxed mb-10">
        A AutoHelp é um novo sistema de ajuda para clientes Porto com diversos tipos de solução para seu veículo! Em
        parceria com os alunos da FIAP, desenvolvemos um método de ajudar na experiência de nossos clientes para ter o
        melhor atendimento possível com algo que antes era tão burocrático!
      </p>
      <div className="flex justify-center items-center mt-10">
        <img src="/oxigenio-logo.png" alt="Oxigênio Aceleradora" className="w-64" />
      </div>
    </div>
  );
}
