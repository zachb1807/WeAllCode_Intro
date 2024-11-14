'use client'

// import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button, Input } from '@chakra-ui/react'
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
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [inputStatus, setInputStatus] = useState(0);
    const router = useRouter()

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        var localMessage = 0;

    }, [router]);

    const checkInput = (text: string) => {
        if (text.length == 0) {
            setInputStatus(0)
        }
        else if (/^[.]*$/.test(text) && text.includes(".")) {
            setInputStatus(1);
        } else {
            setInputStatus(2);
        }
    }


    return (
        <>
            <Heading variant="disable_font" className="shadow-2x" textAlign={'center'}>Practice typing a period:</Heading>
            <Image src="/macbook-keyboard-period.png" alt="keyboard" borderRadius="15px" boxShadow='dark-lg' />
            <Text fontSize={'xl'}>Using the <Kbd fontSize={22}>.</Kbd> key, practice typing some periods in the textbox below:</Text>
            <Input placeholder='Click then type here...' size='lg' variant={'filled'} maxW={'lg'} onChange={(e) => { checkInput(e.target.value) }} focusBorderColor={inputStatus == 0 ? 'blue.500' : inputStatus == 1 ? 'green.500' : 'red.500'} />
            <IncorrectBox display={inputStatus == 2 ? 'block' : 'none'}>
                Don&apos;t type anything other than periods.
            </IncorrectBox>
            <Link href="/keyboard/special_keys/comma" >
                <Button colorScheme="green" size="lg" rightIcon={<ArrowForwardIcon />} display={inputStatus == 1 ? 'block' : 'none'}>Great job! Continue</Button>
            </Link>
        </>
    );
}
