import React from 'react'
import { StyleSheet, View } from 'react-native'
import { n } from '../../utils/normalize'

export default function Container({ children, style }) {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: n(28),
        marginTop: n(10),
    },
})
