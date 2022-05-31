import { Button, Flex, Text } from "@chakra-ui/react";

export function Menu () {
    return (
        <Flex w="100%" flexDir="row" justify="center">
            <Button>MAPA</Button>
            <Button>SOBRE</Button>
        </Flex>
    )
}