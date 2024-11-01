import Image from 'next/image';
import Link from 'next/link';

export default function Integrantes() {
  const teamMembers = [
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

  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center text-white transform transition duration-200"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={180}
              height={180}
              quality={100}
              className="rounded-lg object-cover w-64 h-64"
            />
            <h2 className="mt-4 text-2xl font-bold">{member.name}</h2>
            <p className="text-base font-semibold text-gray-200">{member.id}</p>
            <Link 
              href={member.github} 
              target="_blank" 
              className="mt-2 text-blue-200 hover:underline"
            >
              Meu GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
