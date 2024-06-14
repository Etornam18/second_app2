import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../constants';

const Button = () => {
  return (
    <TouchableOpacity 
    style={{
        ...styles.btn,
        ...props.style
    }}
    onPress={props.onPress}>
        <Text style={{
            ...FONTS.body2,
            fontFamily:"medium",
            color:COLORS.white
        }}>
          {props.title}
        </Text>

    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal:SIZES.padding,
        paddingVertical:SIZES.padding2,
        borderColor:COLORS.primary,
        borderWidth:1,
        borderRadius:32,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.primary
    }
})