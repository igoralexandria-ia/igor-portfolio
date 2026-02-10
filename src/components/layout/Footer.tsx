const Footer = () => {
  return (
    <footer className="w-full py-8 bg-dark-1 border-t border-dark-3 text-center text-light-muted text-sm">
      <div className="container mx-auto px-6">
        <p>
          © {new Date().getFullYear()} Igor Alexandria. Todos os direitos
          reservados.
        </p>
        <p className="mt-2">Desenvolvido com React e Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
