import React,{useState, useRef} from "react";
import {View,Text,StyleSheet,FlatList,Animated} from 'react-native';
import slides from '../slides';
import SlidesItem from "./SlidesItem";
import Paginator from "./Paginator";

export default function Slider() {
  const [currentIndex,setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
  return (
    <View style={styles.container}>
      <View style={{ flex:1, justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
        <FlatList 
        styles={{flex:3}}
        data={slides} 
        renderItem={({item})=> <SlidesItem item={item} slides={slides} scrollX={scrollX} /> }
        horizontal
        showsHorizontalScrollIndicator
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
        {/*<Paginator data={slides} scrollX={scrollX} style={{flex:3}}/>*/}
      </View>
      
    </View>
  );
}
  
  
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});