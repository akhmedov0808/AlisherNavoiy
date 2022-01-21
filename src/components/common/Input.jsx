import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Field } from 'formik'
import { TextInputMask } from 'react-native-masked-text'
import { colors } from '../../utils/colors'
import { n } from '../../utils/normalize'

export default function Input({
    label,
    name,
    validate,
    left,
    right,
    style,
    keyboard,
    placeholder,
    text,
    maxLength,
    autoCapitalize,
    wrapperStyle,
    labelStyle,
    editable,
    masked,
    placeholderTextColor,
    ...attributes
}) {
    return (
        <View style={{ ...wrapperStyle }}>
            {label ? <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text> : null}
            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <View style={form.errors[name] ? {
                        borderWidth: n(1),
                        borderColor: 'red',
                        borderStyle: 'solid',
                        ...styles.wrapper,
                        ...style,
                    } : { ...styles.wrapper, ...style }}>
                        {left ? <View style={styles.leftBlock}>{left}</View> : null}

                        {masked ? (
                            <TextInputMask
                                options={{
                                    mask: masked === 'phone' ? '(99) 999-99-99'
                                        : masked === 'phoneSecond' ? '(99) 999 99 99' : '99 | A 999 AA',
                                }}
                                type={masked === 'phone' ? 'cel-phone' : 'custom'}
                                style={{ ...styles.inputStyle, ...text }}
                                onChangeText={(value) => form.setFieldValue(name, value)}
                                value={String(field.value)}
                                keyboardType={keyboard}
                                placeholder={placeholder}
                                maxLength={maxLength}
                                autoCapitalize={autoCapitalize}
                                editable={editable}
                                placeholderTextColor={placeholderTextColor} />
                        ) : null}

                        {!masked ? (
                            <TextInput
                                style={{ ...styles.inputStyle, ...text }}
                                onChangeText={(value) => form.setFieldValue(name, value)}
                                value={String(field.value)}
                                keyboardType={keyboard}
                                placeholder={placeholder}
                                maxLength={maxLength}
                                autoCapitalize={autoCapitalize}
                                editable={editable}
                                placeholderTextColor={placeholderTextColor}
                                {...attributes} />
                        ) : null}

                        {right ? <View style={styles.rightBlock}>{right}</View> : null}
                    </View>
                )}
            </Field>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: n(20),
        fontWeight: '600',
        marginBottom: n(10),
        color: colors.dark_swampy,
    },
    wrapper: {
        height: n(66),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: n(25),
        paddingRight: n(40),
        borderRadius: n(15),
        backgroundColor: '#F0F0F0',
    },
    leftBlock: {
        marginRight: n(20),
    },
    inputStyle: {
        width: '100%',
        fontSize: n(17),
        color: 'black',
    },
})
