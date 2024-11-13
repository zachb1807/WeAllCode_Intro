'use client'

import { ArrowForwardIcon, ArrowRightIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Card, Container, Flex, Heading, Modal, ModalOverlay, SimpleGrid, Wrap, WrapItem, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Button, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const inter = Inter({ subsets: ["latin"] });

interface TypingTestPageProps {
    chars: string[];
}

export default function TypingTestPage({ chars }: TypingTestPageProps) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentInvalid, setCurrentInvalid] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const resetState = () => {
        chars.sort(() => Math.random() - 0.5)
        setCurrentIndex(0)
        setCurrentInvalid(false)
        setIsComplete(false
        )
    }



    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;


        document.addEventListener("keydown", (event) => {
            const necessaryKey = chars[currentIndex]
            if (event.key === necessaryKey) {
                setCurrentIndex(currentIndex + 1)
                setCurrentInvalid(false)
                if (currentIndex === chars.length - 1) {
                    setIsComplete(true)
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
            // setCurrentInvalid(false)
        }, { signal });
    }, [chars, currentIndex]);

    return (
        <Container p={6} maxW={'container.xl'}>
            <Flex w="100%" h="100%" alignContent={'center'} className={`${inter.className}`} direction={'column'} >
                <Heading variant="disable_font" textAlign={'center'} my={12}>Practice typing special characters:</Heading>
                <Wrap spacing={10} justify='center' transition="0.3s">
                    {chars.map((char, index) => {
                        return (
                            <WrapItem key={index}>
                                <Card h={170} w={170}
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
                                    backgroundColor={currentInvalid && currentIndex == index ? 'red.200' : currentIndex == index ? '' : currentIndex > index ? 'green.100' : ''}
                                    transform={currentInvalid && currentIndex == index ? 'scale(1.02)' : currentIndex == index ? 'scale(1.1)' : 'scale(1)'}
                                    boxShadow={currentIndex == index ? '2xl' : ''}
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
                        <ModalHeader><Heading variant={'disable_font'} size={'lg'}>Great job!</Heading></ModalHeader>
                        <ModalBody>
                            <Text>You can try again or continue</Text>
                        </ModalBody>
                        <ModalFooter display={'flex'} justifyContent={'center'} mt={2}>
                            <Button colorScheme='blue' mr={3} onClick={() => {resetState()}}>
                                Try again
                            </Button>
                            <Button variant='ghost' rightIcon={<ArrowForwardIcon />}>Continue</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Container>
    )
}