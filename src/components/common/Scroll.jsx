import React from 'react'
import { ScrollView } from 'react-native'
import { n } from '../../utils/normalize'

export default function Scroll({
    items,
    renderItem,
    horizontal = false,
    paging = false,
    interval = n(100),
    classes,
    horizontalScrollIndicator = false,
}) {
    return (
        <ScrollView
            horizontal={horizontal}
            pagingEnabled={paging}
            snapToInterval={interval}
            contentContainerStyle={{ paddingHorizontal: n(28), ...classes }}
            showsHorizontalScrollIndicator={horizontalScrollIndicator}>
            {items.map(renderItem)}
        </ScrollView>
    )
}
