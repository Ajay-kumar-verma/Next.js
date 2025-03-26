import {notFound} from "next/navigation"
export default async ({params}:{params:Promise<{id:string}>})=>{
  
    const {id} = await params;
     if(id === 1234)
       return notFound();

    return <h1>
      Here is the product ID: {id}
    </h1>
}