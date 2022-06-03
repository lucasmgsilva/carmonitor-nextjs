import { Box, Divider, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Menu } from "../components/Menu";

const About: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>CarMonitor</title>
            </Head>

            <Box maxWidth={1120} width="100%" mx="auto" px="5" pb="10">
                <Menu/>

                <Image src="/assets/car.png" mx="auto" w={["50%", "xs"]}/>

                <Text fontSize={['2xl']} fontWeight="bold" color="white">
                    {t('about.whatIsIt')}
                </Text>
                <Text fontSize={['xl']} ml="4" color="white">
                    {t('about.aboutTheApp')}
                </Text>
                <Divider my="12"/>
                <Text fontSize={['2xl']} fontWeight="bold" color="white">
                    {t('about.availableResources')}
                </Text>
                <Text fontSize={['xl']} ml="4" mt="2" color="white">
                    • {t('about.trackTheVehicles')};
                </Text>
                <Text fontSize={['xl']} ml="4" mt="2" color="white">
                    • {t('about.monitorSpeed')};
                </Text>
                <Text fontSize={['xl']} ml="4" mt="2" color="white">
                    • {t('about.triggerAlarm')}.
                </Text>
                <Divider my="12"/>
                <Text fontSize={['2xl']} fontWeight="bold" color="white">
                    {t('about.whoDeveloped')}
                </Text>
                <Text fontSize={['xl']} ml="4" color="white">
                    - Lucas Matheus Gomes da Silva;
                </Text>
                <Text fontSize={['xl']} ml="4" color="white">
                    - Lucas de Oliveira Alonso;
                </Text>
                <Text fontSize={['xl']} ml="4" color="white">
                    - Luciano Moises Ventorine;
                </Text>
                <Text fontSize={['xl']} ml="4" color="white">
                    - Luiz Carlos Siqueira Junior.
                </Text>
            </Box>
        </>
    )
}

export default About;