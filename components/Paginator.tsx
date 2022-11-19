import React from 'react';
import { StyleSheet, View,Animated,useWindowDimensions} from 'react-native';
import {Slides} from "./Slides";
import styles from "../styles/Paginator";

export default function Paginator({data, scrollX} : {data : Slides[],scrollX:unknown }) {
    const {width} = useWindowDimensions();
    console.log("scrollX",scrollX);
    return (
        <View style={{flexDirection:'row', height:64 }}>
        {data.map((_,i)=> {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            return <Animated.View style={[styles.dot,{
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
