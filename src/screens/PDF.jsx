import React from 'react'
import PDFReader from 'rn-pdf-reader-js'

export default function WorkDetail({ route }) {
    const { book } = route.params

    return (
        <PDFReader
            source={{
                uri: book.pdf,
            }}
        />
    )
}
