import React from 'react';
import { StyleSheet, View,Animated,useWindowDimensions} from 'react-native';


export default function Paginator({data, scrollX}) {
    const {width} = useWindowDimensions();
    return (
        <View style={{flexDirection:'row', height:64 }}>
        {data.map((_,i)=> {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3,1,0.3],
                extrapolate:'clamp',
            });
            return <Animated.View style={[styles.dot,{
                //opacity,
                backgroundColor:scrollX.interpolate({
                    inputRange,
                    outputRange:['#717171','#AB4E68','#717171'],
                    extrapolate:'clamp',
                }),
                borderColor:scrollX.interpolate({
                    inputRange,
                    outputRange:['#717171','#FFC733','#717171'],
                }),
                borderWidth:scrollX.interpolate({
                    inputRange,
                    outputRange:[0,2,0],
                }),
            }]} key={i.toString()} />;
        })}
        </View>
    );
}


const styles = StyleSheet.create({
  dot:{
    height:15,
    width:15,
    borderRadius:10,
    marginHorizontal:8,
  }
});
