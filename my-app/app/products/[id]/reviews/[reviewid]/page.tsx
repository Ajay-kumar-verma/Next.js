export default async function page({
  params,
}: {
  params: Promise<{ reviewid: string; id: string }>;
}) {
  const { id, reviewid } = await params;
  return (
    <h1>
      Here is the review ID: {reviewid}
      <br />
      Here is the Prodcut ID: {id}
    </h1>
  );
}
