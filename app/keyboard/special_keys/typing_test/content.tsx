'use client'

import { ArrowForwardIcon, ArrowRightIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Card, Container, Flex, Heading, Modal, ModalOverlay, SimpleGrid, Wrap, WrapItem, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Button, Text, Stack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"



const inter = Inter({ subsets: ["latin"] });

interface TypingTestPageProps {
    chars: string[];
}

export default function TypingTestContent({ chars }: TypingTestPageProps) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentInvalid, setCurrentInvalid] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const startTime = useRef<number | null>(null);
    const endTime = useRef<number | null>(null);

    const timerStarted = useRef(false);


    const startTimer = () => {
        startTime.current = Date.now()
    }

    const toSeconds = (time: number) => {
        return time / 100
    }

    const resetState = () => {
        startTime.current = null
        chars.sort(() => Math.random() - 0.5)
        setCurrentIndex(0)
        setCurrentInvalid(false)
        setIsComplete(false)
        timerStarted.current = false
    }

    const getTimeDifference = () => {
        return endTime.current && startTime.current ? Math.round((endTime.current - startTime.current) / 10) / 100 : 0
    }



    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;


        document.addEventListener("keydown", (event) => {
            if (!timerStarted.current) {
                timerStarted.current = true
                startTimer()

            }
            const necessaryKey = chars[currentIndex]
            if (event.key === necessaryKey) {
                setCurrentIndex(currentIndex + 1)
                setCurrentInvalid(false)
                if (currentIndex === chars.length - 1) {
                    setIsComplete(true)
                    endTime.current = Date.now()
                }
                controller.abort();
            }
            else if (event.key != "Shift") {
                setCurrentInvalid(true)
            }
        }, { signal });

        document.addEventListener("keyup", (event) => {
            setTimeout(() => {
                setCurrentInvalid(false)
            }
                , 75)
        }, { signal });
    }, [chars, currentIndex]);

    return (
        <>
            <Stack spacing={4}>
                <Heading variant="disable_font" textAlign={'center'}>Practice typing special characters</Heading>
                <Text textAlign={'center'} fontSize={'xl'}>Type the characters below as they become outlined in blue as fast as you can:</Text>
            </Stack>
            <Wrap spacing={10} justify='center' transition="0.3s">
                {chars.map((char, index) => {
                    return (
                        <WrapItem key={index}>
                            <Card h={150} w={150}
                                fontSize={85}
                                textAlign={'center'}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                variant={'outline'}
                                borderRadius={10}
                                color={currentIndex <= index ? 'black' : 'green.500'}
                                borderColor={currentInvalid && currentIndex == index ? 'red.500' : currentIndex == index ? 'blue.500' : currentIndex > index ? 'green.500' : ''}
                                borderWidth={currentIndex == index ? 6 : 2}
                                backgroundColor={currentInvalid && currentIndex == index ? 'red.200' : currentIndex == index ? 'white' : currentIndex > index ? 'green.100' : 'white'}
                                transform={currentInvalid && currentIndex == index ? 'scale(1.02)' : currentIndex == index ? 'scale(1.1)' : 'scale(1)'}
                                boxShadow={currentIndex == index ? '2xl' : 'md'}
                                transition="0.2s"
                            >
                                {currentIndex <= index ? char : <CheckIcon />}
                            </Card>
                        </WrapItem>
                    )
                }
                )}
            </Wrap>
            <Modal isOpen={isComplete} onClose={() => { }} isCentered >
                <ModalOverlay backdropFilter={'blur(12px)'} />
                <ModalContent className={inter.className} py={6} textAlign={'center'} boxShadow={'0'}>
                    <ModalHeader>
                        <Heading variant={'disable_font'} size={'xl'}>{getTimeDifference()} seconds</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <Text fontSize={'lg'}>Great job!</Text>
                        <Box height={2} />
                        <Text fontSize={'lg'}>You can play again for a faster time or move on</Text>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent={'center'} mt={2}>
                        <Button colorScheme='blue' mr={3} onClick={() => { resetState() }}>
                            Play again
                        </Button>
                        <Link href="/survey">
                        <Button variant='ghost' rightIcon={<ArrowForwardIcon />}>Move On</Button>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}