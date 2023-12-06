import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Containers/Authentications/Login';
import Register from '../Containers/Authentications/Register';
import ForgotPassword from '../Containers/Authentications/ForgotPassword';
import Logout from '../Containers/Authentications/Logout';
import Form from '../Containers/Forms/Form';
import RealChat from '../Containers/Chats/RealChat';
import ChatList from '../Containers/Chats/ChatList';
import {Videocall} from '../Containers/Videocall/Videocall';
import {RegisterScreen} from '../Containers/Videocall/RegisterScreen';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import NewItem from '../Containers/Table/NewItem';
import {TableData} from '../Data/TableData';
import Table from '../Containers/Table/Table';
import {TableData} from '../Data/TableData';
import Table from '../Containers/Table/Table';
import EditItem from '../Containers/Table/EditItem';
import GroupList from '../Containers/Chats/GroupList';
import Contacts from '../Containers/Chats/Contacts';
import AudioPlayer from '../Containers/AudioPlayer/AudioPlayer';
import PlayList from '../Containers/AudioPlayer/PlayListGroup';
import AudioList from '../Containers/AudioPlayer/AudioList';
import PlayListTracks from '../Containers/AudioPlayer/PlayListTracks';
import BarcodeScanner from '../Containers/BarcodeScanner/BarcodeScanner';
import BarcodeOutput from '../Containers/BarcodeScanner/BarcodeOutput';
import Tiles from '../Containers/Tiles/Tiles';
import Chat from '../Containers/Chats/Chat';
import {useAppContext} from '../Context/ContextProvider';
import {DrawerLayoutAndroid} from 'react-native';
import Themes from '../Containers/Tiles/Themes';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigationView = () => <Themes />;
  const {drawer} = useAppContext();

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}
        initialRouteName="Tiles">
        <Stack.Screen name="Tiles" component={Tiles} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Videocall" component={Videocall} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
        <Stack.Screen name="BarcodeOutput" component={BarcodeOutput} />
        <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
        <Stack.Screen name="AudioList" component={AudioList} />
        <Stack.Screen name="PlayListTracks" component={PlayListTracks} />
        <Stack.Screen name="PlayList" component={PlayList} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="EditItem" component={EditItem} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Groups" component={GroupList} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="ChatRoom" component={RealChat} />
      </Stack.Navigator>
    </DrawerLayoutAndroid>
  );
};

export default StackNavigator;
