import Link from "next/link";

export default function InterceptedF3(){
    return (<>
     <h1>Intercepted F3 page</h1>
     <div>
     <Link href='/f1'>f1</Link>
     <Link href='/f3'>F2</Link>
     </div>
    </>)
}