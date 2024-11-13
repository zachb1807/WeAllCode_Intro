'use server'

import TypingTestPage from "./components"


export default async function TypingTest() {
    const chars = [",", ".", "#", "<", "(", '"', ")", ">"].sort(() => Math.random() - 0.5)
    return (
        <TypingTestPage chars={chars}/>
    )
}