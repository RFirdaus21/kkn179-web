export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-6rem)]">
      <div className="flex min-h-[calc(100vh-6rem)] items-center bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat px-6 text-white md:px-12 lg:px-20">
        <div className="max-w-4xl space-y-3 md:space-y-4">
          <div className="text-2xl font-bold leading-tight md:text-4xl">Selamat Datang di Website</div>
          <div className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">KKN 179 Cikasungka</div>
          <div className="text-2xl font-bold leading-tight md:text-4xl">UIN Sunan Gunung Djati Bandung</div>
        </div>
      </div>
    </section>
  );
}