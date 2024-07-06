import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'

const Chat = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: COLORS.white
    }}>
      {/*Render Header */}
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:COLORS.white,
        borderBottomColor:COLORS.gray,
        borderBottomWidth:.2
      }}> 
         <View>
          
         </View>

      
       

      </View>
       {/*Render Chats*/} 

       {/*Render Input Bar */}

    </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({})