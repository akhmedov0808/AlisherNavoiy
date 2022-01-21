import React from 'react'
import { StyleSheet, View } from 'react-native'
import { n } from '../../utils/normalize'

export default function TabBarIcon({ focused, icon: Icon }) {
    return (
        <View style={focused ? styles.active : styles.inactive}>
            <Icon color={focused ? '#6030c9' : 'white'} style={styles.block} />
        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: 'white',
        borderRadius: n(100),
    },
    inactive: {
        borderRadius: n(100),
    },
    block: {
        margin: n(15),
    },
})
