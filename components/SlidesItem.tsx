import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View,Text,Image, useWindowDimensions, Animated } from 'react-native';
import Paginator from "./Paginator";
import { Slides } from "./Slides";
import styles from "../styles/SlidesItem";



export default function SliderItem({item, slides, scrollX} : {item : Slides, slides : Slides[], scrollX:unknown } ) {
  
  const {width,height} = useWindowDimensions();
  
  return (
    <View style={[styles.container, 
      {width}, 
      { backgroundColor:`${item.background_color}`,
      marginTop:Constants.statusBarHeight }]}>
    <View style={styles.header}>
      <Image source={item.header_img} style={[styles.header_Img,
        { width:width/5,
      height:height/15}]}/>
    </View>
    {!item.description_icon ?
    <View style={{flexGrow:1,flexDirection:'column',justifyContent:'center'}}>
      <Text style={[styles.description,{
        color:`${item.color}`,
        fontSize:item.description_font_size,
        paddingHorizontal:item.description_horizontal_padding,
      }]}>{item.description}</Text>
    </View> :
    <View style={{flexGrow:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Text style={[styles.description_icon_title,{
        color:`${item.color}`,
        fontSize:item.description_font_size,
        paddingHorizontal:item.description_horizontal_padding,
      }]}>{item.description}</Text>
      <View style={[styles.description_icon,{
        borderBottomColor:item.description_bottom_border_color,
      }]}>
        <Image source={item.description_icon}/>
      </View>
      <Text style={[styles.description_message,{
        color:item.description_message_color,
      }]}>{item.description_message}</Text>
    </View>
    }
    <View style={{alignItems:"center"}}>
      <Paginator data={slides} scrollX={scrollX}/>
    </View>
    {!item.footer_image ?
     <></>:
    <View style={{alignItems:"center", position:"absolute", bottom:0, zIndex:-1}}>
      <Image source={item.footer_image}/>
    </View>
    }
    </View>
  );
}


