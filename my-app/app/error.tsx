"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-2xl font-bold">Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()} // Refresh the page
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reload Page
      </button>
    </div>
  );
}
