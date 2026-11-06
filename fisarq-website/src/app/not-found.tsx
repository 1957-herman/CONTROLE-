import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-start justify-center py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze-600">Erro 404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-stone-600">O endereço que procura não existe ou foi movido.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-anthracite-900 px-6 py-3 text-sm font-medium text-white hover:bg-anthracite-700">
        Voltar ao início
      </Link>
    </section>
  );
}
