export default async ({params}:{params:Promise<{id:string}>})=>{
  
    const {id} = await params;
    return <h1>
      Here is the product ID: {id}
    </h1>
}