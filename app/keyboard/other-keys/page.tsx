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
        <Heading variant="disable_font" className="shadow-2x">Some other important keys</Heading>
        <Box h='14' />
        <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
          We can &apos;copy&apos; text or images to save it to our computer&apos;s <b>clipboard</b>. This means you can later &apos;paste&apos; it somewhere else to use it again without having to retype it.
        </Text>
        <Box h='14' />
        <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
          To copy, select the text you would like to use, press and <b>hold</b> the <Kbd fontSize={'20px'}>command ⌘</Kbd> key and then press the <Kbd fontSize={'20px'}>C</Kbd> key.
        </Text>
        <Box h='14' />
        <Link href="/keyboard/copy">
          <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Try it!</Button>
        </Link>

      </Container>
    </AbsoluteCenter>
  );
}
