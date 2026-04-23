import galleryLinks from "../storage/galleryLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery() {
  return (
    <section className="px-4 py-10 text-center sm:px-6 md:px-8 md:py-14">
      <h2 className="mb-8 text-4xl font-bold md:mb-10 md:text-5xl">Galeri Kegiatan</h2>
      <div>
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-6 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-6">
          {galleryLinks.map((m, i) => (
            <LazyLoadImage
              className="mb-5 w-full rounded-lg transition duration-300 ease-in-out hover:scale-[1.02] sm:mb-6"
              key={i}
              {...m}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
