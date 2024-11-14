'use client'

// import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button, List, ListItem, UnorderedList } from '@chakra-ui/react'
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
        <Image src={'/WeAllCode_logo.webp'}></Image>
            <Heading variant="disable_font" className="shadow-2x">Special Keys</Heading>
            <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
                The keyboard also has keys that allow you to type <b>special characters</b> such as:
            </Text>
            <UnorderedList fontSize={'xl'} textAlign={'left'}>
                <ListItem>Periods</ListItem>
                <ListItem>Commas</ListItem>
                <ListItem>Parentheses</ListItem>
                <ListItem>Quotes</ListItem>
                <ListItem>Angle brackets</ListItem>
                <ListItem>Curly braces</ListItem>
                <ListItem>Hashtags</ListItem>
            </UnorderedList>
            <Text fontSize={'xl'} align={'center'} lineHeight={'45px'}>
                Let&apos;s practice a few!
            </Text>

            <Link href="/keyboard/special_keys/period">
                <Button colorScheme="blue" size="lg" rightIcon={<ArrowForwardIcon />}>Try it!</Button>
            </Link>
        </>
    );
}
