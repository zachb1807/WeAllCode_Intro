'use client'

import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'
import monkeyTypeImage from '@/app/image/monkeytype.png'
import Link from "next/link";


export default function SurveyPage() {
  return (
    <>
    <Heading variant={"disable_font"}>Great job!</Heading>
    <Text fontSize={'xl'}>If you still have time before class begins, you can complete this tutorial again or practice your typing skills on Monkeytype.</Text>
    <ButtonGroup>
        <Link href='/keyboard/command'><Button colorScheme="blue" size="lg" leftIcon={<RepeatIcon/> }>Complete tutorial again</Button></Link>
        <Link href={'https://monkeytype.com/'} target="_blank"><Button variant={'monkeytype'} size="lg" leftIcon={<Image alt="Monkeytype logo" src={monkeyTypeImage} height={0} width={40}/>}>Monkeytype</Button></Link>
    </ButtonGroup>

    </>
  );
}
