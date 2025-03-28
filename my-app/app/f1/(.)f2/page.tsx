import Link from "next/link";

export default function InterceptedF2(){
    return (<>
     <h1>(.) Intercepted F2 page</h1>
     <div>
     <Link href='/f1'>f1</Link>
     <Link href='/f3'>F3</Link>
     </div>
    </>)
}