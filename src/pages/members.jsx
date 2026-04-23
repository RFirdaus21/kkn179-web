import { Card } from "../components/Card"
import membersData from "../storage/membersData"


export default function Members() {
    return (
        <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">Anggota</h2>
        </div>
            <div className="grid grid-cols-2 gap-6 p-6 md:grid-cols-12">
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
        </div>
    )
}