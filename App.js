import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './src/Navigation'
import { GlobalProvider } from './src/contexts/GlobalContext'

export default function App() {
    return (
        <GlobalProvider>
            <Navigation />
        </GlobalProvider>
    )
}
