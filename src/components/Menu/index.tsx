import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { t } from "i18next";
import Link from "next/link";

export function Menu(){
    return (
        <Box>
            <UnorderedList display="flex" flexDir={["column", "row"]} justifyContent="center" ml="0">
                <ListItem 
                    p={["3", "6"]}
                    listStyleType="none"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                >
                    <Link href="/">
                        {t('menu.home').toUpperCase()}
                    </Link>
                </ListItem>
                <ListItem 
                    p={["3", "6"]}
                    listStyleType="none"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                >
                    <Link href="/about">
                        {t('menu.about').toUpperCase()}
                    </Link>
                </ListItem>
            </UnorderedList>
        </Box>
    )
}