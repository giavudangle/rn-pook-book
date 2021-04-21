import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    ScrollView 
} from 'react-native'

import Carousel from 'react-native-snap-carousel'

//Colors
import Colors from '../../../utils/Colors'

//Component
import RenderCarouselItem from './RenderCarouselItem'
import RenderGridItem from './RenderGirdItem'


const data = [
    'haha',
    'hihi',
    'hoho'
]

const mockData = [
    {
        "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
        "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
        "_id": "60544951d6e5b1185scaas9d2db",
        "filename": "imageUrl-1616136453234.jpg",
        "price": "999999",
        "color": "red",
        "origin": "USA",
        "standard": "VIP",
        "description": "A Best Book",
        "type": "Sex",
        "title": "Sex of Blow",
        "createdAt": "2021-03-19T06:47:33.251Z",
        "updatedAt": "2021-03-19T06:47:33.251Z",
        "__v": 0
    },
    {
      "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
      "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
      "_id": "60544951d6e5b11asads85scaas9d2db",
      "filename": "imageUrl-1616136453234.jpg",
      "price": "999999",
      "color": "red",
      "origin": "USA",
      "standard": "VIP",
      "description": "A Best Book",
      "type": "Sex",
      "title": "Sex of Blow",
      "createdAt": "2021-03-19T06:47:33.251Z",
      "updatedAt": "2021-03-19T06:47:33.251Z",
      "__v": 0
  },
    {
      "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
      "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
      "_id": "605449051d6e5b118549sdfd2db",
      "filename": "imageUrl-1616136453234.jpg",
      "price": "999999",
      "color": "red",
      "origin": "USA",
      "standard": "VIP",
      "description": "A Best Book",
      "type": "Sex",
      "title": "Sex of Blow",
      "createdAt": "2021-03-19T06:47:33.251Z",
      "updatedAt": "2021-03-19T06:47:33.251Z",
      "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "60544901d6e5b1185c9cdbbdf2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Sex",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185c9bfetddb",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Sex",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d65b1185jc9dngs2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185c9fdhtesddb",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185cs9fdsd2db",
    "filename": "imageUrl-161613645v3234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185c9fdscxdsd2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185c9f4dhtesddb",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
    },
    {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185cs69fdsd2db",
    "filename": "imageUrl-161613645v3234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
    },
    {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b1185c92fdscxdsd2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "Haha",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
    },
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051d6e5b118549xcsdfd2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "hihi",
    "title": "Sex of Blow",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
  },
  {
  "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
  "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
  "_id": "60544901d6e5b1185c9cdbmtbdf2db",
  "filename": "imageUrl-1616136453234.jpg",
  "price": "999999",
  "color": "red",
  "origin": "USA",
  "standard": "VIP",
  "description": "A Best Book",
  "type": "hihi",
  "title": "Sex of Blow",
  "createdAt": "2021-03-19T06:47:33.251Z",
  "updatedAt": "2021-03-19T06:47:33.251Z",
  "__v": 0
  },
  {
  "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
  "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
  "_id": "605449051d6e5b1185c9bdffetddb",
  "filename": "imageUrl-1616136453234.jpg",
  "price": "999999",
  "color": "red",
  "origin": "USA",
  "standard": "VIP",
  "description": "A Best Book",
  "type": "hihi",
  "title": "Sex of Blow",
  "createdAt": "2021-03-19T06:47:33.251Z",
  "updatedAt": "2021-03-19T06:47:33.251Z",
  "__v": 0
  },
  {
  "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
  "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
  "_id": "605449051d65b1185jc9d7ngs2db",
  "filename": "imageUrl-1616136453234.jpg",
  "price": "999999",
  "color": "red",
  "origin": "USA",
  "standard": "VIP",
  "description": "A Best Book",
  "type": "hihi",
  "title": "Sex of Blow",
  "createdAt": "2021-03-19T06:47:33.251Z",
  "updatedAt": "2021-03-19T06:47:33.251Z",
  "__v": 0
  },
]

export default function Body({navigation}) {
    let carousel = 0;
    return (
        <ScrollView style={styles.container}>
            <Carousel
                ref={c => carousel = c}
                data={data}
                renderItem={({item}) => <RenderCarouselItem item={item}/>}
                sliderWidth={400}
                itemWidth={370}
                loop
            />
            <Text 
                style={{
                    alignSelf: 'flex-start',
                    marginLeft: 10,
                    fontSize: 20,
                    color: Colors.lighter_green,
                    fontWeight: 'bold'
                }}
            >
                Danh mục sách
            </Text>
           <View style={{alignItems: 'center'}}>
            <FlatList
                    data={mockData}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => <RenderGridItem item={item} navigation={navigation}/>}
                    numColumns={2}
                    initialNumToRender={6}
                    maxToRenderPerBatch={6}
                />
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
