import { Card } from "../components/Card"
import membersData from "../storage/membersData"


export default function Members() {
  return (
    <section className="container mx-auto px-4 py-10 md:px-6 md:py-14">
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Anggota</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        {membersData.map((m, i) => (
          <Card
            key={i}
            name={m.name}
            jurusan={m.jurusan}
            jabatan={m.jabatan}
            img={m.img}
            className={i < 4 ? "md:col-span-3" : "md:col-span-4"}
          />
        ))}
      </div>
    </section>
  )
}