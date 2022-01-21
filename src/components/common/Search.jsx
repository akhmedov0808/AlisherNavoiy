import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as Icon from 'react-native-feather'
import { colors } from '../../utils/colors'
import useTrans from '../../hooks/trans'
import useDebounce from '../../hooks/useDebounce'

export default function Search({ style, onSubmit, placeholderTextColor, ...initialValues }) {
    const [value, setValue] = useState('')
    const t = useTrans()
    const debouncedValue = useDebounce(value, 300)

    useEffect(() => {
        onSubmit(value)
    }, [debouncedValue])

    return (
        <Formik onSubmit={onSubmit} initialValues={{ search: '', ...initialValues }}>
            {() => (
                <View>
                    <View style={{ position: 'absolute', zIndex: 1, left: 20, top: 12 }}>
                        <Icon.Search color="black" width="20" />
                    </View>

                    <TextInput
                        name="search"
                        type="search"
                        value={value}
                        onChangeText={setValue}
                        placeholder={t('search')}
                        placeholderTextColor={placeholderTextColor}
                        style={{ ...styles.search, ...style }} />
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        paddingLeft: 50,
        color: 'grey',
        backgroundColor: colors.WHITER,
    },
})
