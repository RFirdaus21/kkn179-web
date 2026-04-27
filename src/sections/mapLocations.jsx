import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const MapLocations = () => {
    const [mapError, setMapError] = useState(false);
    
    useEffect(() => {
        Aos.init()
    }, [])
    
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.068625770771!2d107.8154381510623!3d-7.005242504788339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c678bfe9f901%3A0x3fe66d5ab39ad107!2sCikasungka%2C%20Cikancung%2C%20Bandung%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1777272395223!5m2!1sen!2sid";
    
    return (
        <div className="p-4 md:p-8" data-aos="flip-down" data-aos-duration="1000">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">Lokasi</h1>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center">
                {mapError ? (
                    <div className="w-full h-64 sm:h-80 md:h-96 max-w-2xl flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg">
                        <p className="text-gray-500 text-sm md:text-base px-4 text-center">Gagal memuat peta. Silakan coba lagi nanti.</p>
                    </div>
                ) : (
                    <iframe 
                        src={mapUrl} 
                        className="w-full h-64 sm:h-80 md:h-96 max-w-2xl rounded-lg shadow-lg"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        onError={() => setMapError(true)}
                        title="Lokasi KKN"
                    ></iframe>
                )}
            </div>
        </div>
    )
}

export default MapLocations;
