'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button, Flex, Stack, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
// import { Image } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import { use, useEffect, useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'
import GreatJobBox from '../../components/GreatJobBox'
import IncorrectBox from "../../components/IncorrectBox";
import { useRouter } from 'next/navigation'

import keyboardImage from '@/app/image/macbook-keyboard-cmd.png'

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
        setTimeout(function () {
          router.push('/keyboard/command/info');
        }, 1000);
      }
      else {
        setIncorrectPressed(true);
      }
    }, { signal });
  }, [router]);

  return (
    <>
      <Heading variant="disable_font" className="shadow-2x">Take a look at your keyboard:</Heading>
      <Image src={keyboardImage} alt="keyboard" placeholder="blur" width={776} height={300} style={{ borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px;' }} />
      <Text fontSize={'xl'}>Locate the <Kbd size='xl' fontSize={'20px'}>command</Kbd> key on your laptop, highlighted in red above, and <b>press it</b>.</Text>
      <GreatJobBox display={commandPressed == true ? 'block' : 'none'}>
        Great job!
      </GreatJobBox>
      <IncorrectBox display={incorrectPressed == true ? 'block' : 'none'}>
        Oops, thats not quite right. Try again.
      </IncorrectBox>
    </>
  );
}
