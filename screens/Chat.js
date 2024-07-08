import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: COLORS.primary,
                marginRight: 12,
                marginVertical: 12,
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
    return <Bubble {...props} />;
  };

  const submitHandler = () => {
    const message = {
      _id: Math.random().toString(36).substr(2, 9),
      text: inputMessage,
      createdAt: new Date().getTime(),
      user: { _id: 1 },
    };
    setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
    setInputMessage('');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Render Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: COLORS.white,
          borderBottomColor: COLORS.gray,
          borderBottomWidth: 0.2,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 12 }}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>

          <View>
            <View
              style={{
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
              }}
            />
            <Image
              source={images.user1}
              resizeMode="contain"
              style={{
                height: 48,
                width: 48,
                borderRadius: 999,
              }}
            />
          </View>

          <View style={{ marginLeft: 16 }}>
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.black,
              }}
            >
              Sebana Rudiger
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLORS.primary,
                fontFamily: 'regular',
              }}
            >
              Online
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={{ marginHorizontal: 16 }}>
            <Feather name="video" size={24} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="phone" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Render Chats */}
      <GiftedChat
        messages={messages}
        renderInputToolbar={() => {
          return null;
        }}
        user={{
          _id: 1,
        }}
        minInputToolbarHeight={0}
        renderMessage={renderMessage}
      />

      {/* Render Input Bar */}
      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor={COLORS.black}
            value={inputMessage}
            onChangeText={handleInputText}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: 8 }}>
              <Image
                source={icons.camera}
                resizeMode="contain"
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
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={submitHandler} style={styles.sendButton}>
            <FontAwesome name="send" size={22} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    borderColor: 'rgba(128, 128, 128, 0.4)',
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
