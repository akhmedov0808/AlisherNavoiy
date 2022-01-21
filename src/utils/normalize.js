import normalize from 'react-native-normalize'
import { Dimensions } from 'react-native'

export function n(value, scale = false) {
    const { fontScale } = Dimensions.get('window')
    return normalize(value / (scale ? fontScale : 1))
}
