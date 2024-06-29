'use client'

// import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, AbsoluteCenter, Text, Box, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import { use, useEffect, useState } from "react";
import { CheckIcon } from '@chakra-ui/icons'

const inter = Inter({ subsets: ["latin"] });

export default function GreatJobBox({ display, children }: { display: string; children: React.ReactNode }) {
  return (
    <Box fontSize={'xl'} backgroundColor={'green.200'} p='5' display={display} borderRadius={'10px'}>
      <CheckIcon color='white' boxSize={10} backgroundColor={'green.700'} p='2' borderRadius={'25px'} mr='3' />
      {children}
    </Box>
  );
}
