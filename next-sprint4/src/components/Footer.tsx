export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-transparent text-white text-lg font-semibold">
      <div className="text-center">
        <p>
          Visite o nosso trabalho no{" "}
          <a
            href="https://github.com/AngelloTDC/next-sprint4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-cyan-400">
            Git-Hub
          </a>
          ! Visite o site oficial{" "}
          <a
            href="https://www.portoseguro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-cyan-400">
            Porto-Seguro
          </a>
          !
        </p>
      </div>
    </footer>
  );
}
