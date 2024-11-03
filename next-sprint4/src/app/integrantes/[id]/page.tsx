import Image from 'next/image';
import Link from 'next/link';

interface Member {
  name: string;
  id: string;
  image: string;
  github: string;
}

const teamMembers: Member[] = [
  {
    name: 'Angello Turano da Costa',
    id: 'RM556511',
    image: '/integrante1.png',
    github: 'https://github.com/AngelloTDC',
  },
  {
    name: 'Leonardo Kawachi',
    id: 'RM558166',
    image: '/integrante2.jpg',
    github: 'https://github.com/IHateMyTiming',
  },
  {
    name: 'Victor Nieves Britto Medeiros',
    id: 'RM554557',
    image: '/integrante3.jpg',
    github: 'https://github.com/victornbm7405',
  },
];

export default function IntegranteDetalhe({ params }: { params: { id: string } }) {
  const { id } = params;

  const member = teamMembers.find((member) => member.id === id);

  if (!member) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-center text-white mt-10">
      <Image
        src={member.image}
        alt={member.name}
        width={200}
        height={200}
        quality={100}
        className="rounded-lg object-cover w-64 h-64"
      />
      <h2 className="mt-4 text-3xl font-bold">{member.name}</h2>
      <p className="text-xl font-semibold text-gray-200">{member.id}</p>

      <a 
        href={member.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 inline-block"
      >
        Meu GitHub
      </a>

      <Link href="/integrantes" passHref>
        <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">
          Voltar para a lista de integrantes
        </button>
      </Link>
    </div>
  );
}
