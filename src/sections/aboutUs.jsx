import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Carousel from "../components/Carousel";

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8">
            <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                <Carousel />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1000">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Tentang Kami</h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Kami adalah tim KKN (Kuliah Kerja Nyata) dari universitas yang berdedikasi untuk membantu masyarakat 
                    di Desa Cikasungka. Dengan semangat pengabdian dan inovasi, kami berusaha memberikan kontribusi 
                    positif bagi perkembangan desa dan kesejahteraan warga.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
                    Melalui program-program pemberdayaan masyarakat, kami berharap dapat membawa perubahan yang berarti 
                    dan berkelanjutan bagi komunitas lokal.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;