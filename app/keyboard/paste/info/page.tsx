'use client'

// import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import { use, useEffect, useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()

  return (
    <AbsoluteCenter>
      <Container centerContent className={`${inter.className}`} maxW='container.xl'>
        <Heading variant="disable_font" className="shadow-2x">How to paste</Heading>
        <Box h='14' />
        <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
          Now that you&apos;ve learned how to copy, let&apos;s learn how to <b>paste</b>! Pasting is when you take something you&apos;ve copied and put it somewhere else.
        </Text>
        <Box h='14' />
        <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
          To paste, press and <b>hold</b> the <Kbd fontSize={'20px'}>command ⌘</Kbd> key and then press the <Kbd fontSize={'20px'}>V</Kbd> key.
        </Text>
        <Box h='14' />
        <Link href="/keyboard/paste">
          <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Try it!</Button>
        </Link>

      </Container>
    </AbsoluteCenter>
  );
}
