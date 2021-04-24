import React, {useState} from 'react'
import { View, Button} from 'react-native'

//styles
import styles from './styles'

//Components
import {Body} from './components/Body'
import {Header} from './components/Header'

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
  {
    "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
    "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
    "_id": "605449051dasc65b1185jc9d7ngs2db",
    "filename": "imageUrl-1616136453234.jpg",
    "price": "999999",
    "color": "red",
    "origin": "USA",
    "standard": "VIP",
    "description": "A Best Book",
    "type": "hihi",
    "title": "hy khang",
    "createdAt": "2021-03-19T06:47:33.251Z",
    "updatedAt": "2021-03-19T06:47:33.251Z",
    "__v": 0
    },{
      "url": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142500/cemcxfewk9opzneq36h9.png",
      "thumb": "https://res.cloudinary.com/daktfdww5/image/upload/v1616142502/dvjh8mwvnf5atgpqqzon.jpg",
      "_id": "605449051da876543sc65b1185jc9d7ngs2db",
      "filename": "imageUrl-1616136453234.jpg",
      "price": "999999",
      "color": "red",
      "origin": "USA",
      "standard": "VIP",
      "description": "A Best Book",
      "type": "hihi",
      "title": "Khang Hy",
      "createdAt": "2021-03-19T06:47:33.251Z",
      "updatedAt": "2021-03-19T06:47:33.251Z",
      "__v": 0
      },
]

export function SearchScreen({data}) {
    const [searchData, setSearchData] = useState([]);

    const filterData = (mockData, searchValue) => {
        let temp = mockData.filter(item => {
            let a = item.title.split(' ').join("");
            let b = searchValue.split(' ').join("");
            // console.log(a)
            return a.toLowerCase().includes(b.toLowerCase())
        })
        // console.log(temp)
        return temp;
    }

    return (
        <View style={styles.container}>
            <Header 
                filterData={(text) => filterData(mockData, text)}
                setSearchData={setSearchData}
            />
            <Body searchData={searchData}/>
        </View>
    )
}
