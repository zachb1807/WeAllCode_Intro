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
      <Heading variant="disable_font" className="shadow-2x">The &apos;return&apos; key</Heading>
      <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
        Sometimes when we&apos;re writing code, we need to move to a <b>new line</b>. To do this, we use the <Kbd fontSize={'20px'}>return</Kbd> key.
      </Text>
      <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
        This will move the cursor to a new line in the code editor.
      </Text>
      <Link href="/keyboard/enter">
        <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Try it!</Button>
      </Link>
    </>
  );
}
