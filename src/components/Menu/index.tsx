import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { t } from "i18next";

export function Menu(){
    return (
        <Box>
            <UnorderedList  display="flex" justifyContent="center" height="100%">
                <ListItem 
                    p="4"
                    listStyleType="none"
                    fontWeight="bold"
                    color="white"
                >
                    {t('menu.home').toUpperCase()}
                </ListItem>
                <ListItem 
                    p="4"
                    listStyleType="none"
                    fontWeight="bold"
                    color="white"
                >
                    {t('menu.about').toUpperCase()}
                </ListItem>
            </UnorderedList>
        </Box>
    )
}