import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Settings() {
    const { setLang, lang } = useContext(GlobalContext)

    const languages = [
        { name: 'O\'zbek', value: 'uz' },
        { name: 'Русский', value: 'ru' },
        { name: 'English', value: 'en' },
    ]

    return (
        <View style={styles.container}>
            {languages.map((item) => (
                <TouchableOpacity
                    key={item.value}
                    onPress={() => {
                        setLang(item.value)
                    }}
                    style={{ marginRight: 10, marginTop: '50%' }}>
                    <Text style={lang === item.value
                        ? {
                            textDecorationLine: 'underline',
                            textDecorationStyle: 'dotted',
                            textDecorationColor: 'blue',
                            color: 'black',
                        }
                        : { color: 'black' }}>{item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
})
