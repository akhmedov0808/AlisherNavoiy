import React from 'react'
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native'
import Container from '../components/common/Container'
import logo from '../assets/alisherNavoiy.jpg'
import ramka from '../assets/ramka.png'
import { useTabBarHeader } from '../hooks/helpers'
import useTrans from '../hooks/trans'

export default function InfoTab() {
    useTabBarHeader({
        headerShown: false,
    })
    const t = useTrans()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image blurRadius={20} source={logo} style={styles.opacityImage} />

                <View style={styles.logo}>
                    <Image source={logo} style={{
                        width: 200,
                        height: 200,
                        borderRadius: 1000,
                    }} />
                </View>

                <View style={styles.ramka}>
                    <Image source={ramka} style={{ width: 280, height: 280 }} />
                </View>
            </View>

            <Container>
                <Text style={styles.name}>{t('title1')}</Text>

                <Text style={styles.biography}>
                    {t('info1')}
                    {t('info2')}
                    {t('info3')}
                </Text>

                <Text style={styles.biographyTitle}>{t('title2')}</Text>

                <Text style={styles.biography}>
                    {t('info4')}
                </Text>

                <Text style={styles.biographyTitle}>{t('title3')}</Text>

                <Text style={styles.biography}>
                    {t('info5')}
                </Text>

                <Text style={styles.biographyTitle}>{t('title4')}</Text>

                <Text style={styles.biography}>
                    {t('info6')}
                </Text>

                <Text style={styles.biographyTitle}>{t('title5')}</Text>

                <Text style={styles.biography}>
                    {t('info7')}
                </Text>

                <Text style={styles.biographyTitle}>{t('title6')}</Text>

                <Text style={styles.biography}>
                    {t('info8')}
                </Text>
            </Container>

            <View style={{ marginBottom: 10 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    opacityImage: {
        width: '100%',
        height: 400,
        // opacity: 0.37,
    },
    logo: {
        width: '100%',
        height: 400,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ramka: {
        width: '100%',
        height: 400,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 5,
    },
    biography: {
        fontSize: 15,
        lineHeight: 23,
    },
    biographyTitle: {
        fontWeight: '700',
        fontSize: 25,
        marginVertical: 10,
    },
})
