import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View,Text,Image, useWindowDimensions } from 'react-native';
import Paginator from "./Paginator";

export default function SliderItem({item, slides, scrollX}) {
  const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container:{
      flexGrow:1,
      flexDirection:'column',
      backgroundColor:`${item.background_color}`,
      marginTop:Constants.statusBarHeight,
    },
    image:{
      flex:0.2,
      justifyContent:'center',
    },
    header:{
      flexGrow:0.1, 
      justifyContent:'flex-end', 
      alignItems:'flex-start', 
      flexDirection:'row',
      paddingTop:0,
    },
    header_Img:{
      width:'20%',
      height:'75%',
      resizeMode:'contain',
      marginTop:'2%',
      marginRight:'2%'
    },
    title:{
      fontWeight:'800',
      fontSize:28,
      marginBottom:10,
      color:'#493d8a',
      textAlign:'center',
    },
    description:{
      fontWeight:'300',
      color:`${item.color}`,
      textAlign:'center',
      fontSize:item.description_font_size,
      paddingHorizontal:64,
    }
  });

  return (
    <View style={[styles.container, {width}]}>
        {/*<View style={styles.header}>
          <View style={{flex:1}}/>
          <Image source={item.header_Img} style={styles.header_Img}/>
  </View>*/}
        {/* <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain' }]}/> */}
        {/*<View style={{flex:4,justifyContent:'center'}}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
<Paginator data={slides} scrollX={scrollX}/>*/}
    <View style={styles.header}>
      <Image source={item.header_Img} style={styles.header_Img}/>
    </View>
    <View style={{flexGrow:1,backgroundColor:'red'}}></View>
    </View>
  );
}


