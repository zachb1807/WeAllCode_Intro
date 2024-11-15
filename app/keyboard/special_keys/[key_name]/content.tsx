'use client'

import IncorrectBox from "@/app/components/IncorrectBox"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Heading, Text, Input, Button, Kbd, Box, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image, { StaticImageData } from "next/image";

import angleBracketsKeyboardImage from '@/app/image/macbook-keyboard-angle_brackets.png'
import commaKeyboardImage from '@/app/image/macbook-keyboard-comma.png'
import curlyBracesKeyboardImage from '@/app/image/macbook-keyboard-curly_braces.png'
import hashtagKeyboardImage from '@/app/image/macbook-keyboard-hashtag.png'
import parenthesesKeyboardImage from '@/app/image/macbook-keyboard-parentheses.png'
import periodKeyboardImage from '@/app/image/macbook-keyboard-period.png'
import quotesKeyboardImage from '@/app/image/macbook-keyboard-quotes.png'
import defaultKeyboardImage from '@/app/image/macbook-keyboard.png'


interface Props {
    keyName: string
    friendlyName: string

    requiresShift: boolean
    nextItem: string
    symbols: string[]
}

export default function SpecialKeyContent({ keyName, friendlyName, requiresShift, nextItem, symbols }: Props) {

    let keyboardImage: StaticImageData

    switch (keyName) {
        case 'period':
            keyboardImage = periodKeyboardImage
            break;
        case 'comma':
            keyboardImage = commaKeyboardImage
            break;
        case 'parentheses':
            keyboardImage = parenthesesKeyboardImage
            break;
        case 'quotes':
            keyboardImage = quotesKeyboardImage
            break;
        case 'angle_brackets':
            keyboardImage = angleBracketsKeyboardImage
            break;
        case 'curly_braces':
            keyboardImage = curlyBracesKeyboardImage
            break;
        case 'hashtag':
            keyboardImage = hashtagKeyboardImage
            break;
        default:
            keyboardImage = defaultKeyboardImage
    }

    const checkInput = (text: string) => {
        if (symbols.length == 1) {
            var symbol = symbols[0];
            var escapedSymbol = symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`^[${escapedSymbol}]*$`);

            if (text.length == 0) {
                setInputStatus(0)
            }
            else if (pattern.test(text) && text.includes(symbol)) {
                setInputStatus(1);
            } else {
                setInputStatus(2);
            }
        }
        else {
            var symbol1 = symbols[0];
            var symbol2 = symbols[1];
            const escapedSymbol1 = symbol1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const escapedSymbol2 = symbol2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`^[${escapedSymbol1}${escapedSymbol2}]*$`);

            if (text.length == 0) {
                setInputStatus(0)
            }
            else if (!(text.includes(symbol1) && text.includes(symbol2)) && pattern.test(text)) {
                setInputStatus(0)
            }
            else if (pattern.test(text) && text.includes(symbol1) && text.includes(symbol2)) {
                setInputStatus(1);
            }
            else {
                setInputStatus(2);
            }
        }
    }

    const [inputStatus, setInputStatus] = useState(0);
    const router = useRouter()

    return (
        <>
            <Heading variant="disable_font" className="shadow-2x" textAlign={'center'}>Practice typing {friendlyName}:</Heading>
            <Box boxShadow={'dark-lg'} borderRadius={'15px'}>
                <Image src={keyboardImage} alt="keyboard" placeholder="blur" width={776} height={300} style={{ borderRadius: '15px' }} />
            </Box>
            <Stack spacing={3}>
                <Text fontSize={'xl'}>Using the <Kbd fontSize={22}>{symbols[0]}</Kbd> {symbols.length > 1 ? <>and <Kbd fontSize={22}>{symbols[1]}</Kbd></> : ''} key{symbols.length > 1 ? 's' : ''}, practice typing some {friendlyName} in the textbox below:</Text>
                {requiresShift && <Text fontSize={'xl'}>You&apos;ll need to hold the <Kbd>Shift</Kbd> key to access the {friendlyName}.</Text>}
            </Stack>
            <Input placeholder='Click then type here...' size='lg' backgroundColor={'white'} boxShadow={'md'} maxW={'lg'} onChange={(e) => { checkInput(e.target.value) }} focusBorderColor={inputStatus == 0 ? 'blue.500' : inputStatus == 1 ? 'green.500' : 'red.500'} />
            <IncorrectBox display={inputStatus == 2 ? 'block' : 'none'}>
                Don&apos;t type anything other than {friendlyName}.
            </IncorrectBox>
            <Link href={nextItem == "done" ? '/keyboard/special_keys/typing_test' : '/keyboard/special_keys/' + nextItem} >
                <Button colorScheme="green" size="lg" rightIcon={<ArrowForwardIcon />} display={inputStatus == 1 ? 'block' : 'none'}>Great job! Continue</Button>
            </Link>
        </>
    )
}