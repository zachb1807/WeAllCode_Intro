'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'

import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  var router = useRouter()
  return (
    <AbsoluteCenter>
      <Container centerContent className={`${inter.className}`}>
        <Heading variant="disable_font">Welcome to We All Code</Heading>
        <Box h="10" />
        <Text align="center" fontSize='xl'>We&apos;re thrilled to have you at our class today! Before we get started, we want to make sure you know your way around the computer.</Text>
        <Box h="7" />
        <Text align="center" fontSize='xl'>Click &apos;Let&apos;s go&apos; below to begin.</Text>
        <Box h="10" />
        <Link href="/keyboard/command">
          <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Let&apos;s go</Button>
        </Link>
      </Container>
    </AbsoluteCenter>
  );
}
