'use client'

// import Image from "next/image";
import { useRouter } from 'next/navigation'

import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  var router = useRouter()
  return (
    <>
            <Image src={'/WeAllCode_logo.webp'} width={'300px'} alt="We All Code logo"></Image>
      <Heading variant="disable_font">Welcome to We All Code</Heading>
      <Text align="center" fontSize='xl'>We&apos;re thrilled to have you at our class today! Before we get started, we want to make sure you know your way around the computer.</Text>
      <Text align="center" fontSize='xl'>Click &apos;Let&apos;s go&apos; below to begin.</Text>
      <Link href="/keyboard/command">
        <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Let&apos;s go</Button>
      </Link>
    </>
  );
}
