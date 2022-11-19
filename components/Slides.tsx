import React,{useState, useRef} from "react";
import {View,Text,StyleSheet,FlatList,Animated} from 'react-native';
import slides from '../slides';
import SlidesItem from "./SlidesItem";
import styles from "../styles/Slides";

export interface Slides {
  id:string;
  header_img:number;
  title:string;
  description:string;
  description_font_size:number;
  description_horizontal_padding:string;
  background_color:string;
  color:string;
  footer_image?:number;
  description_icon?:number;
  description_bottom_border_color?:string;
  description_message?:string;
  description_message_color?:string;
}

interface ViewItems {
  index:number;
  isViewable:boolean;
  item:Slides;
  key:string;
}

export default function Slider() {

  const [currentIndex,setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems } : { viewableItems: ViewItems[] } ) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  console.log("viewableItemsChanged",viewableItemsChanged);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
  return (
    <View style={styles.container}>
      <View style={{ flex:1, justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
        <FlatList 
        style={{flex:3}}
        data={slides} 
        renderItem={({item})=> <SlidesItem item={item} slides={slides} scrollX={scrollX} /> }
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=> item.id}
        onScroll={ Animated.event( [ { nativeEvent: { contentOffset:{ x:scrollX } } } ],{
          useNativeDriver:false,
        } ) }
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        />
      </View> 
    </View>
  );
}