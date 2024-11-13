'use client'

import { CheckIcon } from "@chakra-ui/icons";
import { Box, Card, Container, Flex, Heading, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function TypingTest() {
    const chars = [",", ".", "#", "<", "(", '"', ")", ">"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentInvalid, setCurrentInvalid] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;


        document.addEventListener("keydown", (event) => {
            const necessaryKey = chars[currentIndex]
            if (event.key === necessaryKey) {
                setCurrentIndex(currentIndex + 1)
                setCurrentInvalid(false)
                controller.abort();
            }
            else if(event.key != "Shift") {
                setCurrentInvalid(true)
            }
        }, { signal });

        document.addEventListener("keyup", (event) => {
            setCurrentInvalid(false)
        }, { signal });
    },);


    const router = useRouter()
    return (
        <Container p={6} maxW={'container.xl'}>
            <Flex w="100%" h="100%" alignContent={'center'} className={`${inter.className}`} direction={'column'} >
                <Heading variant="disable_font" textAlign={'center'} my={12}>Practice typing special characters:</Heading>
                <Wrap spacing={10} justify='center'>
                    {chars.map((char, index) => {
                        return (
                            <WrapItem key={index}>
                                <Card h={180} w={180}
                                    fontSize={100}
                                    textAlign={'center'}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    variant={'outline'}
                                    borderRadius={10}
                                    color={currentIndex <= index ? 'black' : 'green.500'}
                                    borderColor={currentInvalid && currentIndex == index ? 'red.500' : currentIndex == index ? 'blue.500' : currentIndex > index ? 'green.500' : ''}
                                    borderWidth={currentIndex == index ? 6 : 2}
                                    backgroundColor={currentInvalid && currentIndex == index ? 'red.200' : currentIndex == index ? '' : currentIndex > index ? 'green.100' : ''}
                                    transform={currentIndex == index ? 'scale(1.1)' : 'scale(1)'}
                                    boxShadow={currentIndex == index ? '2xl' : ''}
                                    // transition="transform 0.5s, background-color 0.5s, border-color 0.5s, color 0.5s, boxShadow 0.5s"
                                    transition="0.2s"
                                >
                                    {currentIndex <= index ? char : <CheckIcon/>}
                                </Card>
                            </WrapItem>
                        )
                    }
                    )}
                </Wrap>
            </Flex>
        </Container>
    )
}