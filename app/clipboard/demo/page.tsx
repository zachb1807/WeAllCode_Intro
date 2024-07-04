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
import GreatJobBox from "@/app/components/GreatJobBox";
import IncorrectBox from "@/app/components/IncorrectBox";
import InfoBox from "@/app/components/InfoBox";
import { useRouter } from 'next/navigation'
import { Code } from '@chakra-ui/react'
import { Tooltip, Alert, AlertIcon } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [copied, setCopied] = useState(false);
    const [pasted, setPasted] = useState(false);
    const [pasteFailed, setPasteFailed] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        var localMessage = 0;

        document.addEventListener("keydown", (event) => {
            if (event.key === "Meta" && localMessage != 3) {
                localMessage = 1;
            }
            if (event.key == 'c' && localMessage == 1) {
                localMessage = 2;
                controller.abort();
                setCopied(true);
            }
        }
            , { signal });
        document.addEventListener("keyup", (event) => {
            if (event.key === "Meta" && localMessage != 2) {
                localMessage = 0;
            }
        }, { signal });
    }, [])

    const handleInputChange = (event: any) => {
        if (event.target.value != "Hello world") {
            event.target.value = "";
            setPasteFailed(true);
            setPasted(false);
        }
        else {
            setPasted(true);
            setPasteFailed(false);
        }
    };

    return (
        <AbsoluteCenter>
            <Container centerContent className={`${inter.className}`} maxW='container.xl'>
                <Heading variant={"disable_font"} className={"shadow-2x"} textAlign={'center'}>Try copying and pasting some text:</Heading>
                <Box h='10' />
                <Text fontSize={'xl'} textAlign={'center'}>Start by using your mouse to select and copy the text below:</Text>
                <Box h='10' />
                <Tooltip hasArrow label='Tip: Select the text by clicking and dragging over both words'>
                    <Code fontSize={'2xl'} fontWeight={"bold"} p={"10px"} borderRadius={'10px'} colorScheme="blue" _selection={{ bg: 'blue.500', color: 'white' }}>Hello world</Code>
                </Tooltip>
                <Box h='10' />
                <Box w={'2xl'}>
                    {copied ?
                        <Alert variant='subtle' status="success">
                            <AlertIcon />
                            Great job copying!
                        </Alert>
                        :
                        <Alert variant='subtle' colorScheme='gray'>
                            <AlertIcon />
                            Remember that the shortcut to copy is  <Kbd fontSize={'17px'} mx={'4px'}>command ⌘</Kbd> + <Kbd fontSize={'17px'} mx={'4px'}>C</Kbd>
                        </Alert>
                    }
                    <Box hidden={!copied}>
                        <Box h='14' />
                        <Text fontSize={'xl'} textAlign={'center'}>Now click the text box below and paste the words you copied:</Text>
                        <Box h='10' />
                        <Tooltip hasArrow label='Oops, that&apos;s not the right text' bg='red.600' isDisabled isOpen={pasteFailed}>
                            <Input placeholder='Click then paste here...' size='lg' variant={'filled'} onChange={handleInputChange} onFocusCapture={() => { setPasteFailed(false) }} />
                        </Tooltip>
                        <Box h='10' />
                        {pasted ?
                            <Alert variant='subtle' status="success">
                                <AlertIcon />
                                Great job pasting!
                            </Alert>
                            :
                            <Alert variant='subtle' colorScheme='gray'>
                                <AlertIcon />
                                Remember that the shortcut to paste is  <Kbd fontSize={'17px'} mx={'4px'}>command ⌘</Kbd> + <Kbd fontSize={'17px'} mx={'4px'}>V</Kbd>
                            </Alert>
                        }
                        <Box h='10' />
                        <Container centerContent>
                            {pasted ?
                                <Link href='/keyboard/other-keys'>
                                    <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Continue!</Button>
                                </Link>
                                :
                                null
                            }
                        </Container>

                    </Box>
                </Box>



            </Container>
        </AbsoluteCenter>
    );
}
