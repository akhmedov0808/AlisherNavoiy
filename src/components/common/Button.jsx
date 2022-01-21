import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { colors } from '../../utils/colors'
import { n } from '../../utils/normalize'

export default function Button({
    onPress,
    color = colors.swampy,
    style,
    loading,
    textStyle,
    title,
    icon,
    iconRight,
    label,
}) {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.label}>{label}</Text> : null}

            <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: color, ...style }}>
                {loading ? <ActivityIndicator /> : (
                    <View style={styles.icon}>
                        {icon ? <View>{icon}</View> : null}

                        <Text style={{ ...styles.text, ...textStyle }}>
                            {title}
                        </Text>

                        {iconRight ? <View style={styles.iconRight}>{iconRight}</View> : null}
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: n(20),
    },
    label: {
        fontSize: n(20),
        fontWeight: '600',
        marginBottom: n(10),
        color: colors.dark_swampy,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: n(66),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: n(20),
    },
    text: {
        color: '#fff',
        fontSize: n(18),
        fontWeight: 'bold',
    },
    iconRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
})
