export default function Servicos() {
  const servicesData = [
    { id: 1, title: 'Troca de Óleo', description: 'Manutenção regular do motor do seu veículo. A troca de óleo garante que seu motor funcione de maneira suave e eficiente, prolongando sua vida útil.' },
    { id: 2, title: 'Alinhamento e Balanceamento', description: 'O alinhamento e balanceamento das rodas garantem que seu carro tenha um desempenho estável e que os pneus se desgastem de maneira uniforme. Isso também melhora a segurança durante a condução.' },
    { id: 3, title: 'Verificação de Freios', description: 'Um serviço essencial para sua segurança. Verificamos pastilhas, discos e fluido de freio para garantir que seu sistema de frenagem esteja sempre em perfeito estado.' },
    { id: 4, title: 'Substituição de Pneus', description: 'Oferecemos pneus de alta qualidade para todas as marcas e modelos de veículos. Nossos especialistas garantem que a instalação seja feita corretamente, aumentando a segurança na estrada.' },
    { id: 5, title: 'Inspeção de Ar Condicionado', description: 'Mantenha o clima do seu carro agradável. Realizamos uma inspeção completa do sistema de ar condicionado, identificando vazamentos e garantindo que tudo funcione perfeitamente.' },
    { id: 6, title: 'Troca de Filtros', description: 'A troca regular dos filtros de ar, óleo e combustível ajuda a manter seu carro limpo e eficiente. Evite problemas futuros com nosso serviço de troca de filtros.' },
    { id: 7, title: 'Diagnóstico Eletrônico', description: 'Usamos tecnologia de ponta para diagnosticar problemas eletrônicos em seu veículo. Identificamos falhas rapidamente, economizando tempo e dinheiro em reparos.' },
    { id: 8, title: 'Lavagem e Polimento', description: 'Deixe seu carro brilhando! Oferecemos serviços de lavagem e polimento, removendo sujeira e riscos, deixando a pintura do seu carro como nova.' }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-center">
      <h1 className="mb-8 text-4xl font-bold text-white">Alguns dos nossos Serviços!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service) => (
          <details
            key={service.id}
            className="group p-6 rounded-lg shadow-md bg-white bg-opacity-80 text-blue-500 cursor-pointer transition-transform duration-300 transform hover:scale-105 active:bg-blue-500 active:bg-opacity-90 active:text-white open:bg-blue-500 open:text-white open:bg-opacity-90"
          >
            <summary className="text-xl font-semibold list-none flex justify-between items-center transition-colors duration-300 group-hover:text-blue-600">
              {service.title}
              <span className="text-lg group-open:rotate-180 transition-transform duration-300"></span>
            </summary>
            <p className="mt-4 text-sm transition-opacity duration-300 opacity-0 max-h-0 group-open:opacity-100 group-open:max-h-screen overflow-hidden">
              {service.description}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
