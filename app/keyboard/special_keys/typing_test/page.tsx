'use server'

import TypingTestContent from "./content"


export default async function TypingTest() {
    const chars = [",", ".", "#", "<", "(", '"', ")", ">"].sort(() => Math.random() - 0.5)
    return (
        <TypingTestContent chars={chars}/>
    )
}