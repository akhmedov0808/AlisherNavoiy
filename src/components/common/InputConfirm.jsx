import React, { useRef, useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import Button from './Button'

export default function InputConfirm({ length = 4, onSubmit, initialValues, loading }) {
    let textInput = useRef(null)
    const [internalVal, setInternalVal] = useState('')

    function onChangeText(val, setFieldValue, handleSubmit) {
        setInternalVal(val)
        setFieldValue('code', val)
        if (val.length === length) {
            handleSubmit()
        }
    }

    function handleClick() {
        setTimeout(() => { textInput.focus() }, 100)
    }

    useEffect(() => {
        setTimeout(() => { textInput.focus() }, 100)
    }, [])

    return (
        <Formik initialValues={{ code: '', ...initialValues }} onSubmit={onSubmit}>
            {({ handleSubmit, setFieldValue }) => (
                <View>
                    <TextInput
                        name="code"
                        ref={(input) => { textInput = input }}
                        onChangeText={(text) => onChangeText(text, setFieldValue, handleSubmit)}
                        style={{ width: 0, height: 0 }}
                        value={internalVal}
                        maxLength={length}
                        returnKeyType="done"
                        keyboardType="numeric" />

                    <View style={styles.containerInput}>
                        {Array(length).fill().map((data, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.cellView,
                                    { borderColor: index === internalVal.length ? '#F18C44' : '#F0F0F0' },
                                ]}>
                                <Text style={styles.cellText} onPress={handleClick}>
                                    {internalVal && internalVal.length > 0 ? internalVal[index] : ''}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <Button loading={loading} onPress={handleSubmit} title="Далее" />
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellView: {
        width: 63,
        height: 63,
        backgroundColor: '#F0F0F0',
        marginHorizontal: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
    },
    cellText: {
        padding: 10,
        color: '#686866',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
    },
})
