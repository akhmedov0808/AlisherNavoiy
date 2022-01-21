import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Icon from 'react-native-feather'
import Button from './Button'
import { n } from '../../utils/normalize'

export default function ButtonLikeInput({ title, onPress, styleText, error, label }) {
    return (
        <View>
            <Button
                title={title}
                label={label}
                iconRight={<Icon.ChevronRight color="black" />}
                onPress={onPress}
                style={error ? {
                    paddingHorizontal: n(20),
                    alignItems: 'flex-start',
                    backgroundColor: '#F0F0F0',
                    borderRadius: n(15),
                    borderWidth: n(1),
                    borderColor: 'red',
                    borderStyle: 'solid',
                } : { ...styles.button }}
                textStyle={{ ...styles.text, ...styleText }} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: n(10),
        paddingLeft: n(22),
        alignItems: 'flex-start',
        backgroundColor: '#F0F0F0',
        borderRadius: n(15),
        borderColor: '#223263',
    },
    text: {
        fontSize: n(17),
        width: '90%',
    },
})
