
export default async function User() {
    await new Promise((res)=>setTimeout(() => {
           res('hi')
    }, 2000))
    return <h1>User account</h1>
}