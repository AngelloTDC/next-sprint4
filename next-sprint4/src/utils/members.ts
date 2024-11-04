
export interface Member {
  name: string;
  id: string;
  image: string;
  github: string;
}

export const teamMembers: Member[] = [
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

export const getMemberById = (id: string): Member | null => {
  if (!id) return null;
  return teamMembers.find(member => member.id === id) || null;
}