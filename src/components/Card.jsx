import { useState } from "react";
import { resolveImgSrc } from "../lib/resolveImgSrc";

export function Card({ name, jurusan, jabatan, img, className = "" }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = resolveImgSrc(img);
  const showPhoto = Boolean(src) && !imgFailed;

  return (
    // <div
    //   className={`mx-auto flex w-full max-w-[220px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`.trim()}
    // >
    //   <div className="aspect-[3/4] w-full shrink-0 overflow-hidden bg-gray-100">
    //     {showPhoto ? (
    //       <img
    //         src={src}
    //         alt={name}
    //         className="h-full w-full object-cover object-top"
    //         onError={() => setImgFailed(true)}
    //       />
    //     ) : (
    //       <div className="flex h-full items-center justify-center px-2 text-center text-sm text-gray-500">
    //         No photo
    //       </div>
    //     )}
    //   </div>
    //   <div className="flex flex-col items-center gap-1 px-3 py-4 text-center">
    //     <h3 className="text-base font-semibold leading-snug text-gray-900">
    //       {name}
    //     </h3>
    //     <p className="text-sm font-medium text-gray-800">{jabatan}</p>
    //     <p className="text-xs leading-relaxed text-gray-600">{jurusan}</p>
    //   </div>
    // </div>



      <div className={`group relative aspect-square overflow-hidden rounded-lg ${className}`.trim()}>
        <img 
          src={src} 
          alt={name} 
          className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="mt-1 text-white/80">{jabatan}</p>
            <p className="mt-1 text-white/80">{jurusan}</p>
          </div>
        </div>
      </div>
  );
}