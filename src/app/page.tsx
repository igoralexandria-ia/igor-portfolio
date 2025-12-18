import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <main className="flex-1 lg:ml-64">
        {/* Suas seções virão aqui */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-primary">
            Bem-vindo ao meu portfólio!
          </h1>
        </section>
      </main>
    </div>
  );
}
