"use client";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3,4,5,6,7,8,9,10].map((id) => (
        <Link key={id} href={`/photos/${id}`}>
         <div
           style={{height:'150px',width:'150px'}}
         >
         <img 
            src={`/images/photo${id}.jpg`}
            alt={`Photo ${id}`}
            className="w-full cursor-pointer"
          />
         </div>
        </Link>
      ))}
    </div>
  );
}
