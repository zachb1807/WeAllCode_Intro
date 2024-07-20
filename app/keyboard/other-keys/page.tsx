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
        <Heading variant="disable_font" className="shadow-2x">Great job!</Heading>
        <Box h='14' />
        <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
          You&apos;ve completed the We All Code intro course. If you have time, complete this pre-class survey before we begin.
        </Text>
        <Box h='14' />
        <Link href="https://wac.fyi/survey">
          <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Open Survey</Button>
        </Link>

      </Container>
    </AbsoluteCenter>
  );
}
