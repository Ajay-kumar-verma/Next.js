export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>This is Home PAge</h1>;
  // main page
}
