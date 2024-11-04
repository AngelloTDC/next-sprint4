
export interface IAddress {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}


export const enderecosData: IAddress[] = [
  {
    id: 1,
    title: 'Unidade Paulista',
    description: 'Edifício Paulista - Av. Paulista, 1106 - 7º andar',
    latitude: -23.564170837402344,
    longitude: -46.65250778198242,
  },
  {
    id: 2,
    title: 'Unidade Aclimação',
    description: 'Av. Lins de Vasconcelos, 1222 - Aclimação',
    latitude: -23.573987,
    longitude: -46.644321,
  },
  {
    id: 3,
    title: 'Unidade Campos Elíseos',
    description: 'Alameda Barão de Piracicaba, 618 - Campos Elíseos',
    latitude: -23.553987,
    longitude: -46.664321,
  },
  {
    id: 4,
    title: 'Unidade Campos Elíseos 2',
    description: 'R. Guaianazes, 1238 - Campos Elíseos',
    latitude: -23.553500,
    longitude: -46.664800,
  },
];

export const getAddressById = (id: number): IAddress | null => {
  if (!id) return null;
  return enderecosData.find(address => address.id === id) || null;
}