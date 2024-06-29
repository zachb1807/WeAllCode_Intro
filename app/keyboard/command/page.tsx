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
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter()
  const [commandPressed, setCommandPressed] = useState(false);
  const [incorrectPressed, setIncorrectPressed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;


    document.addEventListener("keydown", (event) => {
      if (event.key === "Meta") {
        setCommandPressed(true);
        setIncorrectPressed(false);
        controller.abort();
        setTimeout(function() {
          router.push('/keyboard/command/info');
        }, 1000);
      }
      else {
          setIncorrectPressed(true);
      }
    }, { signal });
  }, [router]);

  return (
    <AbsoluteCenter>
      <Container centerContent className={`${inter.className}`} maxW='container.xl'>
        <Heading variant="disable_font" className="shadow-2x">Take a look at your keyboard:</Heading>
        <Box h='14' />
        <Image src="/macbook-keyboard-cmd.png" alt="keyboard" borderRadius="15px" boxShadow='dark-lg' />
        <Box h='14' />
        <Text fontSize={'xl'}>Locate the <Kbd size='xl' fontSize={'20px'}>command</Kbd> key on your laptop, highlighted in red above, and <b>press it</b>.</Text>
        <Box h='14' />
        <GreatJobBox display={commandPressed == true ? 'block' : 'none'}>
          Great job!
        </GreatJobBox>
        <IncorrectBox display={incorrectPressed == true ? 'block' : 'none'}>
          Oops, thats not quite right. Try again.
        </IncorrectBox>

      </Container>
    </AbsoluteCenter>
  );
}
