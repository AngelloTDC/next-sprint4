import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 text-white font-sans">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main className="flex flex-col flex-grow items-center p-4 w-full">
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
