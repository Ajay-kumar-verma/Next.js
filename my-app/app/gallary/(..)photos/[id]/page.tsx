"use client";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        style={{ height: "150px", width: "150px" }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <button onClick={() => router.back()} className="text-red-500">
          Close
        </button>
        <img
          src={`/images/photo${params.id}.jpg`}
          alt={`Photo ${params.id}`}
          className="mt-4 w-96"
        />
      </div>
    </div>
  );
}
