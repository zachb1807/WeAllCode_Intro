'use server'

export default async function RandomNum() {
    const num = Math.floor(Math.random() * 100)
    return (
        <div>
            <h1>{num}</h1>
        </div>
    )
}
