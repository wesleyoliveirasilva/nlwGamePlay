import React from "react"
import { Image } from 'react-native'
import { styles } from "./styles"

export function GuildIcon() {
    const uri = 'https://img.favpng.com/24/23/14/discord-computer-icons-hashtag-logo-png-favpng-w3EwNhWpu1epHcSKs7AxhrV3b.jpg'

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />

    )
}