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
    <>
      <Heading variant="disable_font" className="shadow-2x">You found the <Kbd>command</Kbd> key!</Heading>
      <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
        We use the command key for special <b>functions</b> and <b>keyboard shortcuts</b> on a MacBook. It has the <Kbd fontSize={'25px'}>⌘</Kbd> symbol on it. You&apos;ll learn more about how to use it on the next page.
      </Text>
      <Link href="/keyboard/copy/info">
        <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Continue!</Button>
      </Link>
    </>
  );
}
