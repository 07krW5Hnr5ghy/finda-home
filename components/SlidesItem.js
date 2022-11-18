import React from 'react';
import { StyleSheet, View,Text,Image, useWindowDimensions } from 'react-native';

export default function SliderItem({item}) {
  const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:`${item.background_color}`,
      justifyContent:"center",
      alignItems:"center"
    },
    image:{
      flex:0.2,
      justifyContent:'center',
    },
    header:{
      flex:0.5,
      flexDirection:'row',
      direction:'rtl',
      justifyContent:'flex-end',
    },
    header_Img:{
      width:81,
      height:74,
      marginTop:40,
      marginRight:20,
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
      paddingHorizontal:64,
    }
  });

  return (
    <View style={[styles.container, {width}]}>
        <View style={styles.header}>
          <View style={{flex:1}}/>
          <Image source={item.header_Img} style={styles.header_Img}/>
        </View>
        {/* <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain' }]}/> */}
        <View style={{flex:0.5}}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  );
}


