import React from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet 
} from 'react-native'

//Components
import {RenderHistoryBody} from './RenderHistoryBody'
import {RenderSearchBody} from './RenderSearchBody'

export const Body = ({searchData}) => {
    return (
        searchData.length > 0 ? <RenderSearchBody searchData={searchData}/> : <RenderHistoryBody/>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
