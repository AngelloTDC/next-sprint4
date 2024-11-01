import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 text-white font-sans">
        <Navbar />
        <main className="flex flex-col flex-grow items-center p-4 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
