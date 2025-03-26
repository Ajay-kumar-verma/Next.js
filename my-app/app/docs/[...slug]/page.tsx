export default async ({params}:{params:Promise<{slug:string[]}>})=>{
    
    const {slug}  = await params;

 return <h1>
      This is  docs file
      {JSON.stringify(slug)}
        </h1>
}