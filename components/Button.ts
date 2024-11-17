import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const brandPrimary = defineStyle({
    color: "blue.500",
})


const monkeytype = defineStyle({
    backgroundColor: '#26282a',
    color: "#e2b714",
})
export const buttonTheme = defineStyleConfig({
    variants: {
        brand: brandPrimary,
        "monkeytype": monkeytype,
    },
})