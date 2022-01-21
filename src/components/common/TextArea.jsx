import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Field } from 'formik'
import { n } from '../../utils/normalize'
import { colors } from '../../utils/colors'

export default function TextArea({
    label,
    name,
    validate,
    keyboard,
    style,
    placeholder,
    placeholderTextColor,
    numberOfLines,
    multiline,
    maxLength,
    attributes,
}) {
    return (
        <View>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={{ ...styles.textArea, ...style }}
                            keyboardType={keyboard}
                            maxLength={maxLength}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderTextColor}
                            numberOfLines={numberOfLines}
                            multiline={multiline}
                            onChangeText={(text) => form.setFieldValue(name, text)}
                            value={String(field.value || '')}
                            {...attributes} />
                    </View>
                )}
            </Field>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: n(20),
        marginBottom: n(6),
        letterSpacing: 0.5,
        fontWeight: '600',
        color: colors.dark_swampy,
    },
    textAreaContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: n(15),
        paddingLeft: n(25),
        paddingRight: n(20),
        borderRadius: n(15),
        backgroundColor: '#F0F0F0',
    },
    textArea: {
        width: '100%',
        minHeight: n(125),
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        color: '#686866',
        fontSize: n(17),
    },
})
