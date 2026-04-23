import galleryLinks from "../storage/galleryLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery() {
  return (
    <div class="text-center">
      <div class="text-[36px] items-center font-bold px-20 py-10">Galeri Kegiatan</div>
      <div class="p-5 sm:p-8">
        <div class="columns-1 gap-10 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {galleryLinks.map((m, i) => (
            <LazyLoadImage className="transition duration-300 ease-in-out hover:scale-110" key={i} {...m}/>
          ))}
        </div>
      </div>
    </div>
);
}
