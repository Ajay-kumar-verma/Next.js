export default function PhotoPage({ params }: { params: { id: string } }) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <img src={`/images/photo${params.id}.jpg`} alt={`Photo ${params.id}`} className="max-w-full" />
      </div>
    );
  }
  