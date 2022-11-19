import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View,Text,Image, useWindowDimensions, Animated } from 'react-native';
import Paginator from "./Paginator";
import { Slides } from "./Slides";




export default function SliderItem({item, slides, scrollX} : {item : Slides, slides : Slides[], scrollX:unknown } ) {
  const {width,height} = useWindowDimensions();
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
      width:width/5,
      height:height/15,
      resizeMode:'contain',
      marginTop:'4%',
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
      paddingHorizontal:item.description_horizontal_padding,
      paddingBottom:'10%'
    },
    description_icon_title:{
      fontWeight:'400',
      color:`${item.color}`,
      textAlign:'center',
      fontSize:item.description_font_size,
      paddingHorizontal:item.description_horizontal_padding,
    }, description_icon:{
      borderBottomColor:item.description_bottom_border_color, 
      borderBottomWidth:2, 
      paddingTop:'10%', 
      paddingBottom:'15%', 
      width:'60%', 
      alignItems:"center"
    },
    description_message:{
      color:item.description_message_color,
      marginTop:'10%'
    }
  });

  return (
    <View style={[styles.container, {width}]}>
    <View style={styles.header}>
      <Image source={item.header_img} style={styles.header_Img}/>
    </View>
    {!item.description_icon ?
    <View style={{flexGrow:1,flexDirection:'column',justifyContent:'center'}}>
      <Text style={styles.description}>{item.description}</Text>
    </View> :
    <View style={{flexGrow:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.description_icon_title}>{item.description}</Text>
      <View style={styles.description_icon}>
        <Image source={item.description_icon}/>
      </View>
      <Text style={styles.description_message}>{item.description_message}</Text>
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


