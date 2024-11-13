'use client'

// import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import { use, useEffect, useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'
import GreatJobBox from '../../components/GreatJobBox'
import IncorrectBox from "../../components/IncorrectBox";
import InfoBox from "../../components/InfoBox";
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [message, setMessage] = useState(0);
    const router = useRouter()

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        var localMessage = 0; 

        document.addEventListener("keydown", (event) => {
            if (event.key === "Meta" && localMessage != 3) {
                setMessage(1);
                localMessage = 1;
            }
            if (event.key == 's' && localMessage == 1) {
                setMessage(3);
                localMessage = 3;
                controller.abort();
                setTimeout(function() {
                    router.push('/keyboard/special_keys');
                }, 1000);
            }
        }, { signal });
        document.addEventListener("keyup", (event) => {
            if (event.key === "Meta" && localMessage != 3) {
                setMessage(2);
                localMessage = 2;
            }
        }, { signal });
    }, [router]);


    return (
        <AbsoluteCenter>
            <Container centerContent className={`${inter.className}`} maxW='container.xl'>
                <Heading variant="disable_font" className="shadow-2x" textAlign={'center'}>Let&apos;s practice the save shortcut:</Heading>
                <Box h='14' />
                <Image src={message == 1 ? '/macbook-keyboard-save-cmdpressed.png' : '/macbook-keyboard-save.png'} alt="keyboard" borderRadius="15px" boxShadow='dark-lg' />
                <Box h='14' />
                <Text fontSize={'xl'}>Start by pressing and holding the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key</Text>
                <Box h='14' />

                <InfoBox display={message == 1 ? 'block' : 'none'} >
                    Great! Now, while <b>continuing to hold</b> the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key, press the <Kbd size='xl' fontSize={'20px'}>S</Kbd> key.
                </InfoBox>
                <IncorrectBox display={message == 2 ? 'block' : 'none'}>
                    Make sure you don&apos;t release the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key while trying to save. Try again.
                </IncorrectBox>
                <GreatJobBox display={message == 3 ? 'block' : 'none'}>
                    Great job! You&apos;ve successfully <b>saved</b> your code.
                </GreatJobBox>


            </Container>
        </AbsoluteCenter>
    );
}