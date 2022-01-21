import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Heart from 'react-native-feather/src/icons/Heart'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { maxLength } from '../utils/maxLength'

export default function FavouritesTab({ item }) {
    const [favourite, setFavourite] = useState(true)
    const navigation = useNavigation()

    async function changeFavourite() {
        const favourites = await AsyncStorage.getItem('favourites')

        if (favourite) {
            AsyncStorage.setItem(
                'favourites',
                JSON.stringify(
                    JSON.parse(favourites || '[]').filter((fav) => fav.id !== item.id),
                ),
            )

            setFavourite(false)
            return
        }

        AsyncStorage.setItem('favourites', JSON.stringify([...JSON.parse(favourites || '[]'), item]))
        setFavourite(true)
    }

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate('WorkDetail', { book: item })}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.image} style={styles.image} />

                    <View style={{ width: '50%' }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{maxLength(item.description, 100)}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={changeFavourite}>
                    <Heart fill={favourite ? 'red' : 'none'} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
    },
    image: {
        borderRadius: 10,
        width: '28%',
        height: 135,
        margin: 20,
    },
    name: {
        marginTop: 20,
        fontWeight: '700',
        fontSize: 20,
    },
    description: {
        marginTop: 6,
        color: '#717171',
        fontSize: 14,
    },
})
