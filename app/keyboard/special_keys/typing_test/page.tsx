'use client'

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function TypingTest() {
    const router = useRouter()
    return (
        <Flex w="100%" h="100%" justifyContent={'center'} className={`${inter.className}`}>
                            <Heading variant="disable_font" className="shadow-2x" textAlign={'center'}>Practice typing a hashtag:</Heading>

        </Flex>
    )
}