import galleryLinks from "../storage/galleryLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery() {
  return (
    <section className="px-4 py-8 text-center sm:px-6 md:px-8 md:py-14">
      <h2 className="mb-6 text-3xl font-bold md:mb-10 md:text-5xl">Galeri Kegiatan</h2>
      <div>
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-3 sm:[&>img:not(:first-child)]:mt-4 md:[&>img:not(:first-child)]:mt-5">
          {galleryLinks.map((m, i) => (
            <LazyLoadImage
              className="mb-3 w-full rounded-lg transition duration-300 ease-in-out hover:scale-[1.02] sm:mb-4 md:mb-5"
              key={i}
              {...m}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
