import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;
    if (currentMessage.user._id === 1) {
      return (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginVertical: 8,
        }}>
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: COLORS.primary,
                marginRight: 12,
                marginBottom: 6,
              },
            }}
            textStyle={{
              right: {
                color: COLORS.white,
              },
            }}
          />
        </View>
      );
    }
  };

  const submitHandler = () => {
    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createdAt: new Date(),
      user: { _id: 1 },
    };
    setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
    setInputMessage('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 12 }}>
          <Image
            source={icons.back}
            resizeMode='contain'
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>

        {/* User Info */}
        <View style={styles.userInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={images.user1}
              resizeMode='contain'
              style={{
                height: 48,
                width: 48,
                borderRadius: 999,
              }}
            />
            {/* Online Indicator */}
            <View style={styles.onlineIndicator}></View>
          </View>

          <View style={{ marginLeft: 16 }}>
            <Text style={FONTS.h4}>Sebana Rudiger</Text>
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={{ marginHorizontal: 16 }}>
            <Feather name="video" size={24} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="phone" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Messages */}
      <GiftedChat
        messages={messages}
        renderInputToolbar={() => null}
        user={{ _id: 1 }}
        renderMessage={renderMessage}
      />

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor={COLORS.black}
            value={inputMessage}
            onChangeText={handleInputText}
          />
          {/* Additional Options */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginHorizontal: 8 }}>
              <Image
                source={icons.camera}
                resizeMode='contain'
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.stickyNote}
                resizeMode='contain'
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* Send Button */}
          <TouchableOpacity onPress={submitHandler} style={styles.sendButton}>
            <FontAwesome name="send" size={22} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    zIndex: 999,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  statusText: {
    fontSize: 12,
    color: COLORS.gray,
    fontFamily: 'regular',
    color: COLORS.primary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMessageContainer: {
    height: 54,
    width: SIZES.width - 48,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: 16,
    alignItems: 'center',
    borderColor: 'rgba(128,128,128,0.4)',
    borderWidth: 1,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: COLORS.white,
    padding: 4,
    borderRadius: 999,
    marginHorizontal: 6,
  },
});

export default Chat;
