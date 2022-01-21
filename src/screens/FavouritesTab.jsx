import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { useTabBarHeader } from '../hooks/helpers'
import FavouriteItem from '../components/FavouriteItem'
import useTrans from '../hooks/trans'

export default function FavouritesTab(props) {
    const [favourites, setFavourites] = useState([])
    const isFocused = useIsFocused()
    const t = useTrans()

    useTabBarHeader({
        title: 'Sevimlilar',
        headerTitleAlign: 'center',
    })

    useEffect(() => {
        loadFavourites()
    }, [isFocused, props])

    async function loadFavourites() {
        const items = await AsyncStorage.getItem('favourites')
        setFavourites(JSON.parse(items || '[]'))
    }

    return favourites.length !== 0 ? (
        <ScrollView style={{ paddingTop: 10 }}>
            {favourites.map((item) => (
                <FavouriteItem key={item.id} item={item} />
            ))}
        </ScrollView>
    ) : (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        }}>
            <Text style={{ textAlign: 'center', fontSize: 20, width: '80%' }}>
                {t('notFountFavourite')}
            </Text>
        </View>
    )
}
