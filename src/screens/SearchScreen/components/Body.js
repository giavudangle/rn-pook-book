import React from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet 
} from 'react-native'

//Components
import RenderEmptyBody from './RenderEmptyBody'
import RenderBody from './RenderBody'

export default function Body({searchData}) {
    return (
        searchData.length > 0 ? <RenderBody searchData={searchData}/> : <RenderEmptyBody/>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
