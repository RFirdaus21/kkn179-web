export default function Carousel() {
    const images = [
        "https://res.cloudinary.com/dderecobj/image/upload/v1776911681/pic_6_arwzhe.jpg",
        "https://res.cloudinary.com/dderecobj/image/upload/v1776905235/IMG_5_mhdx8s.jpg",
        "https://res.cloudinary.com/dderecobj/image/upload/v1776911703/pic_5_dbiexx.jpg",
    ];

    return (
        <div id="hs-carousel" className="relative w-full" data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": false}'>
            <div className="hs-carousel relative w-full min-h-48 sm:min-h-64 md:min-h-80 lg:min-h-96 overflow-hidden rounded-lg">
                <div className="hs-carousel-body flex flex-nowrap absolute top-0 bottom-0 inset-s-0 transition-transform duration-700 opacity-0">
                    {images.map((src, index) => (
                        <div key={index} className="hs-carousel-slide w-full flex-shrink-0">
                            <div className="flex justify-center h-full bg-gray-100 p-1 sm:p-2">
                                <img 
                                    src={src} 
                                    alt={`Slide ${index + 1}`} 
                                    className="self-center w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-1 sm:start-2 inline-flex justify-center items-center size-8 sm:size-10 bg-white/80 text-gray-800 rounded-full hover:bg-white focus:outline-none -translate-y-1/2 z-10">
                <span className="text-lg sm:text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-4 sm:size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-1 sm:end-2 inline-flex justify-center items-center size-8 sm:size-10 bg-white/80 text-gray-800 rounded-full hover:bg-white focus:outline-none -translate-y-1/2 z-10">
                <span className="sr-only">Next</span>
                <span className="text-lg sm:text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-4 sm:size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
            </button>
            
            {/* Preline will auto-generate 3 pagination dots */}
            <div className="hs-carousel-pagination flex justify-center absolute bottom-2 sm:bottom-3 start-0 end-0 gap-2"></div>
        </div>
    )
}