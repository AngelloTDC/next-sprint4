import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-sans">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
