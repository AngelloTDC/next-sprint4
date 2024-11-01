import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white pt-12">
      <div className="flex flex-row items-start max-w-5xl w-full px-8 space-x-16">
        <div className="flex-1 text-left max-w-md">
          <h1 className="text-4xl font-bold mb-6">Porto-AutoHelp</h1>
          <p className="text-lg leading-relaxed">
            A AutoHelp é um novo sistema de ajuda para clientes Porto com diversos tipos de solução para seu veículo! Em
            parceria com os alunos da FIAP, desenvolvemos um método de ajudar na experiência de nossos clientes para ter o
            melhor atendimento possível com algo que antes era tão burocrático!
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/foto-site.png"
            alt="Oxigênio Aceleradora"
            width={450} 
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
