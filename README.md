# NEXT-SPRINT4

Bem-vindo ao **NEXT-SPRINT4**! Esse projeto foi desenvolvido em **Next.js** e **TypeScript**, com **Tailwind CSS** para estilização. 
Ele é organizado seguindo a estrutura do App Router do Next.js 13+ e foi pensado para ser modular e fácil de navegar. 
Ao longo do desenvolvimento, trabalhamos várias funcionalidades para cada uma das páginas (endereços, integrantes, serviços e contato).

## Funcionalidades Principais

### 1. Página de **Endereços**
- **Página Principal** (`enderecos/page.tsx`): Lista todos os endereços disponíveis com uma breve descrição.
- **Página de Detalhes** (`enderecos/[id]/page.tsx`): Exibe detalhes de um endereço específico com um mapa do Google Maps embutido (usando `iframe`).
  
### 2. Página de **Serviços**
- **Página Principal** (`servicos/page.tsx`): Exibe uma lista de serviços disponíveis com títulos e descrições curtas.
- **Página de Detalhes** (`servicos/[id]/page.tsx`): Mostra detalhes de cada serviço específico.

### 3. Página de **Integrantes**
- **Página Principal** (`integrantes/page.tsx`): Mostra todos os integrantes da equipe, com fotos, nomes e links para o GitHub.
- **Página de Detalhes** (`integrantes/[id]/page.tsx`): Exibe informações detalhadas do integrante com link para o GitHub e ID.

### 4. Página de **Contato**
- **Página Principal** (`contato/page.tsx`): Formulário para o usuário enviar mensagens de contato.
- **Página Dinâmica de Contato** (`contato/[id]/page.tsx`): Um formulário de contato que pode ser personalizado para cada unidade ou departamento específico.

## Tecnologias e Ferramentas 🚀
- **Next.js 13+**: Framework React para renderização de páginas do lado do servidor.
- **TypeScript**: Superset do JavaScript que traz tipagem estática.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
- **Google Maps**: Usado para integrar mapas nas páginas de endereços (via iframe).
- **Estrutura de rotas dinâmicas do Next.js**: Permite a criação de páginas dinâmicas como `[id]` para URLs personalizadas.

## Configuração de API do Google Maps 🌐
- Se você quiser usar a API do Google Maps para exibir mapas dinâmicos:
- Adicione sua chave da API do Google Maps no iframe da página de detalhes dos endereços.
- As coordenadas para cada endereço já estão pré-configuradas no código para facilitar.
(`no caso o projeto está rodando somente os endereços pré-definidos`).

## Imagens e Recursos Estáticos 📸
- Colocamos todas as imagens e recursos estáticos na pasta public. 

## Observações Importantes 📑
- Componentes Reutilizáveis: Componentes como o Navbar e o Footer foram criados para uso em todas as páginas.

## Estilização 🎨
- Totalmente feita em Tailwind CSS.
- Isso facilita a personalização rápida e a manutenção do design.

## Integrantes
- Angello Turano da Costa: RM556511. 🚀🌐📸📑🎨😄
- Leonardo Kawachi: RM558166.
- Victor Nieves Britto Medeiros: RM554557.

## Vídeo no Youtube de apresentação
- https://youtu.be/Enh4PYAEX8Y

## Link do Vercel
- https://next-sprint4.vercel.app/


