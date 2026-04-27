export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)]">
      <div className="flex min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] items-center bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat px-4 py-8 text-white md:px-12 lg:px-20">
        <div className="max-w-4xl space-y-2 md:space-y-4">
          <div className="text-lg font-bold leading-tight sm:text-2xl md:text-4xl">Selamat Datang di Website</div>
          <div className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-5xl lg:text-6xl">KKN 179 Cikasungka</div>
          <div className="text-lg font-bold leading-tight sm:text-2xl md:text-4xl">UIN Sunan Gunung Djati Bandung</div>
        </div>
      </div>
    </section>
  );
}