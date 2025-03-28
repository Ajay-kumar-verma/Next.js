import Link from "next/link"

export default async function User() {
    await new Promise((res)=>setTimeout(() => {
           res('hi')
    }, 2000))
    return <h1>User account
      <Link href="/complexDashboard/me">ME</Link>
    </h1>
}