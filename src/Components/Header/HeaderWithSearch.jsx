import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Appbar, Button, Menu, Divider, PaperProvider} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';
import MenuPopup from '../Menu/Menu';

const HeaderWithSearch = ({setOpenDrawer, openDrawer}) => {
  const _handleSearch = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };

  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <Appbar.Header style={styles.headerContainer}>
        <Appbar.Action
          icon="menu"
          color={colors.BLACK}
          onPress={_handleSearch}
        />
        <Appbar.Content title="Chats" titleStyle={styles.title} />

        {/* <Appbar.Action
          icon="dots-vertical"
          color={colors.WHITE}
          size={25}
          onPress={_handleMore}
        /> */}
        {/* <MenuPopup /> */}
      </Appbar.Header>
    </>
  );
};

export default HeaderWithSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  headerContainer: {
    backgroundColor: colors.WHITE,
    color: colors.WHITE,
    height: moderateScale(50),
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },

  title: {
    fontFamily: fonts.BOLD,
    fontSize: moderateScale(22),
    color: colors.BLACK,
  },
});
