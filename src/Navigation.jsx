import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Icon from 'react-native-feather'
import TabBarIcon from './components/common/TabBarIcon'
import InfoTab from './screens/InfoTab'
import FavouritesTab from './screens/FavouritesTab'
import MainTab from './screens/MainTab'

import { n } from './utils/normalize'
import { GlobalContext } from './contexts/GlobalContext'
import WorksList from './screens/WorksList'
import PDF from './screens/PDF'
import WorkDetail from './screens/WorkDetail'
import Gazal from './screens/Gazal'
import useTrans from './hooks/trans'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const { headerOptions } = useContext(GlobalContext)
    const t = useTrans()

    return (
        <NavigationContainer theme={{ colors: { background: 'white' } }}>
            <Stack.Navigator initialRouteName="TabScreen" screenOptions={{ headerStyle: styles.stackHeader }}>
                <Stack.Screen name="TabScreen" component={TabScreen} options={headerOptions} />
                <Stack.Screen name="WorkDetail" component={WorkDetail} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="PDF" component={PDF} />
                <Stack.Screen name="WorksList" component={WorksList} options={{
                    title: t('works'),
                    headerStyle: styles.headerStyle,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{ style: styles.tabHeader, showLabel: false, keyboardHidesTabBar: true }}>
            <Tab.Screen name="MainTab" component={MainTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Home} />,
            }} />

            <Tab.Screen name="Favourites" component={FavouritesTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.Heart} />,
            }} />

            <Tab.Screen name="Gazal" component={Gazal} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.FileText} />,
            }} />

            <Tab.Screen name="Info" component={InfoTab} options={{
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={Icon.AlertCircle} />,
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabHeader: {
        backgroundColor: '#8349fe',
        width: '100%',
        height: '12%',
        paddingHorizontal: n(35),
        borderTopLeftRadius: n(30),
        borderTopRightRadius: n(30),
        borderTopWidth: 0,
    },
    stackHeader: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerStyle: {
        backgroundColor: '#f5f4f4',
    },
})
