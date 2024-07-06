import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons } from "../constants"; // Ensure icons is imported correctly
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { messagesData } from "../data"; // Ensure the correct import of messages data



const Chats = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(messagesData);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = messagesData.filter((user) =>
    user.fullName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate("Chat", { userName: item.fullName })}
      style={[
        styles.userContainer,
        index % 2 !== 0 ? styles.oddBackground : null,
      ]}
    >
      <View style={styles.userImageContainer}>
        {item.isOnline && item.isOnline === true && (
          <View style={styles.onlineIndicator} />
        )}
        <Image
          source={item.userImg}
          resizeMode="contain"
          style={styles.userImage}
        />
      </View>

      
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{item.fullName}</Text>
          <Text style={styles.lastSeen }>{item.lastMessage}</Text>
        </View>

        <View style={{
          position:"absolute",
          right:4,
          alignItems:"center",
        }}>
          <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
          <View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor:  item.messageInQueue
                ? COLORS.primary
                : "transparent",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Text style={styles.messageInQueue}>{item.messageInQueue}</Text>
            </TouchableOpacity>
          </View>  
        </View>
          
      
      
    </TouchableOpacity>
  );

  const renderContents = () => {
    return (
      <View style={{ marginBottom: 110 }}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.gray} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts..."
            value={search}
            onChangeText={handleSearch}
          />
          <TouchableOpacity>
            <Image
              source={icons.editPencil} // Ensure this icon is defined correctly in your icons file
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Render Flat List for content */}
        <FlatList
          data={filteredUsers}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>{renderContents()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    height: 50,
    marginVertical: 22,
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: "100%",
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.gray,
  },
  userContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
  },
  oddBackground: {
    backgroundColor: COLORS.white,
  },
  userImageContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  onlineIndicator: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary,
    position: "absolute",
    top: 14,
    right: 2,
    zIndex: 999,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfo: {
    flexDirection: "row",
    width: SIZES.width - 184,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfoContainer: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.black,
    marginBottom: 4,
  },
  lastSeen:{
    fontSize:14,
    color: COLORS.secondaryGray,
  },
  
  lastMessage: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  lastMessageTime: {
    fontSize: 12,
    color: COLORS.black,
  },
  messageInQueue: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.white,
  },
});

export default Chats;
