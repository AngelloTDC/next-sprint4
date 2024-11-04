
export interface Contact {
  id: string;
  nome: string;
}

export const unidades: Contact[] = [
  { id: 'unidade1', nome: 'Unidade Paulista' },
  { id: 'unidade2', nome: 'Unidade Aclimação' },
  { id: 'unidade3', nome: 'Unidade Campos Elíseos' },
  { id: 'unidade4', nome: 'Unidade Campos Elíseos 2' },
];

export const getContactById = (id: string): Contact | null => {
  if (!id) return null;
  return unidades.find(uni => uni.id === id) || null;
}