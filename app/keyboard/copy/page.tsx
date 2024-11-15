'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Kbd } from '@chakra-ui/react'
import { use, useEffect, useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'
import GreatJobBox from '../../components/GreatJobBox'
import IncorrectBox from "../../components/IncorrectBox";
import InfoBox from "../../components/InfoBox";
import { useRouter } from 'next/navigation'

import initialKeyboardImage from '@/app/image/macbook-keyboard-copy.png'
import cmdKeyboardImage from '@/app/image/macbook-keyboard-copy-cmdpressed.png'

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
            if (event.key == 'c' && localMessage == 1) {
                setMessage(3);
                localMessage = 3;
                controller.abort();
                setTimeout(function () {
                    router.push('/keyboard/paste/info');
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
        <>
            <Heading variant="disable_font" className="shadow-2x" textAlign={'center'}>Let&apos;s practice the copy shortcut:</Heading>
            <Box boxShadow={'dark-lg'} borderRadius={'15px'}>
                <Image src={initialKeyboardImage} hidden={message == 1} alt="keyboard" placeholder="blur" width={776} height={300} style={{ borderRadius: '15px' }} />
                <Image src={cmdKeyboardImage} hidden={message != 1} alt="keyboard" placeholder="blur" width={776} height={300} style={{ borderRadius: '15px' }} />

            </Box>
            <Text fontSize={'xl'}>Start by pressing and holding the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key</Text>

            <InfoBox display={message == 1 ? 'block' : 'none'} >
                Great! Now, while <b>continuing to hold</b> the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key, press the <Kbd size='xl' fontSize={'20px'}>C</Kbd> key.
            </InfoBox>
            <IncorrectBox display={message == 2 ? 'block' : 'none'}>
                Make sure you don&apos;t release the <Kbd size='xl' fontSize={'20px'}>command ⌘</Kbd> key while trying to copy. Try again.
            </IncorrectBox>
            <GreatJobBox display={message == 3 ? 'block' : 'none'}>
                Great job! You&apos;ve successfully copied some text.
            </GreatJobBox>
        </>
    );
}
