import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../Utils/colors';
import {List, Avatar, TouchableRipple, Icon, Text} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../Utils/fonts';
import Dot from 'react-native-vector-icons/Octicons';
import Check from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';

const Lists = ({items, groupContact}) => {
  const Item = items.item;
  const navigation = useNavigation();
  const bold = {fontFamily: fonts.BOLD};
  const medium = {fontFamily: fonts.MEDIUM};
  const regular = {fontFamily: fonts.REGULAR};
  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => navigation.navigate('ChatRoom', {Item})}>
      <List.Item
        left={() => (
          <>
            <Avatar.Image
              size={45}
              source={{
                uri: Item.profile_pic
                  ? Item.profile_pic
                  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAAZlBMVEX////MzMxNTU3JycnPz8/T09NGRkb7+/tKSkrk5OTa2trg4ODt7e34+PjGxsZCQkLAwMBYWFicnJxjY2O2trY4ODiDg4NeXl6SkpJ0dHR8fHympqaJiYmtra1TU1M9PT0tLS1ra2twoBxLAAAECUlEQVRoge2a2XKjMBBFLSwJAWZfvIAh/v+fHAGpxLauQAI88zDcl1Slgo97Uau7yeGwa9euXbt27dr1XygMT54XBIHnncLwbwDd0PMZOf6KMN8L3Y8iTz6VnHfJX/mnT4HDgKjEHzIJPuHr0AdWvlrsb811/WgSOSryN/WzZ8IcuN5mTJdN+/bFz2wjc0/mzIF72gLqaaBUCmM38HKAoJTRpCiKRP5EWH8t1EdQVlSpwzkXaVWwD2ARlEW5BDq9BOd5BLjrsABKj1k7IkeJNjuq3DVYNZEordvYeVXcZmpeLU8p9cjQ5MqFoyh+JCp24QFyATTlKlOKpwC7rFyAaKXA0DG6QsWyJVA1qOzyHtIna6/Kl1wSWtW/JGq1UMdp1QtigY/VQ8MaHNRvYxs1ItbHJ1S/OjvrojpE9qxSI9tr3lc+giQTzF6J+oilsSEoSsWUg6WLC/UmONoZC24aWuszuFdcA2pgA3VVZxGazVAzdOvZpDFqH9hlxsMXdPnY1EWQS8uoNvnkIl8t8zA1dzHIYPn8fcbWO+xmzLMYNmi0mCoSskyAk2NVjFFYF1UJYhNYlBbya08Vf1n+cQdrHNgQPz5Lxe2xaWBxMhXxTFxjHFhTKhwxWDWdwjKJK9gbm9YJmMJM2738GJtCqmkS48lmzlRpLHrMmApHm8iAiqZc42sHD1RzDpYuhh5eRWXX2bjeVlFxQaxncxhc66uziU4XCVkmYJUwpuKVAHvMVIkHLKTG5xXWJnnTdZOdaQdvOvPahOuwnNAnEkpc4dROzOswbCV6aydGjjbSPGQ+Y+H7VXpL2/2Ls249ZH6/6pY9LNdSc41/LXoJnE6SetOdWQ4rBLHqm7SB1bb/HawQxKpH1AZWm05geh1lM1/pVoe6ERYNr6ODbXp/NOcM/kpwOoGtxLesxvVA8yF4HyJSjW/sZjptFhN4YrWn1XJ+1eYTPLEi1/y17WIC7CV6UXjxiAcOq/VeAq9oNR2FUJdNg3/tV5hg30QZwzVR1kMf7KeX7PTeizGj2fUsNCdH5NeMvhm8bG368iGMZS3XMEcubzP2+sgS6LOPWXRp0Yr2Fczby9NifOHO9KcusqQSs8yBGztV8s1d/oKlDy0dmAbIUVxILl33esWXA+TNMWcOXOdWUGpXCt+UnLkdc+DG52QN9OBW0+serK5a+7Ku6eyhzUqmVF2apO+vRFmvhx4OZGYh8QbtyBZQeW4fpTG0fGzyInRQUZplMi+LzZhSYfNlsCH4arZ+n39qysn4irhstnPuEzdrS005Frxss08we4WkSaXFr2QhrUwb44FxGdivbzkvyy7u1ZUlz2/15v+eAcleQIp7ndX34hh4f+Wffnbt2rVr165du/65/gCQnjqxVNhTfgAAAABJRU5ErkJggg==',
              }}
              style={styles.avatar}
            />

            {groupContact &&
              groupContact.some(
                contact => contact.user_id === Item.user_id,
              ) && (
                <Check
                  style={styles.check}
                  name="checkcircle"
                  color={colors.STATUS_GREEN}
                  size={15}
                />
              )}
            {Item.active && Item.active !== undefined ? (
              <View style={styles.active}>
                <Icon
                  source={() => (
                    <Dot
                      style={{
                        top: moderateScale(15),
                        left: moderateScale(-3),
                        height: moderateScale(30),
                      }}
                      name="dot-fill"
                      color={colors.WHITE}
                      size={30}
                    />
                  )}
                />
                <Icon
                  source={() => (
                    <Dot
                      style={{
                        bottom: moderateScale(10),
                      }}
                      name="dot-fill"
                      color={colors.APP_PRIMARY}
                      size={20}
                    />
                  )}
                />
              </View>
            ) : Item.active !== undefined ? (
              <View style={[styles.status]}>
                <Text style={[styles.statusTxt]}>{Item.last_seen}</Text>
              </View>
            ) : (
              ''
            )}
          </>
        )}
        title={Item.name}
        titleStyle={[
          styles.title,
          {fontFamily: Item.msg_read ? fonts.MEDIUM : fonts.BOLD},
        ]}
        description={Item.last_msg}
        descriptionStyle={[
          styles.description,
          {fontFamily: Item.msg_read ? fonts.REGULAR : fonts.MEDIUM},
        ]}
        right={() => (
          <View style={styles.notify}>
            <Text style={styles.date}>{Item.modified_date}</Text>
            {Item.msg_read
              ? ''
              : Item.msg_read !== undefined && (
                  <Icon
                    source={() => (
                      <Dot
                        name="dot-fill"
                        color={colors.APP_PRIMARY}
                        size={20}
                      />
                    )}
                  />
                )}
          </View>
        )}
        style={styles.listContainer}
      />
    </TouchableRipple>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    marginBottom: moderateScale(-12),
  },

  avatar: {
    marginLeft: moderateScale(10),
  },

  listContainer: {
    margin: moderateScale(2),
  },

  title: {
    color: colors.BLACK,
  },

  description: {
    fontFamily: fonts.MEDIUM,
    color: colors.BLACK,
  },

  date: {
    fontFamily: fonts.MEDIUM,
    color: colors.GREY20,
  },

  notify: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: moderateScale(30),
    marginTop: moderateScale(5),
  },

  active: {
    marginBottom: moderateScale(2),
    marginLeft: moderateScale(-5),
    height: moderateScale(20),
  },

  status: {
    backgroundColor: colors.WHITE,
    height: moderateScale(30),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
    marginLeft: moderateScale(-18),
    height: moderateScale(15),
    width: moderateScale(25),
  },

  statusTxt: {
    backgroundColor: colors.APP_PRIMARY,
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(8),
    marginRight: moderateScale(8),
    fontFamily: fonts.LIGHT,
    fontSize: moderateScale(7),
    width: moderateScale(20),
    textAlign: 'center',
  },

  check: {
    top: moderateScale(20),
    marginRight: moderateScale(-12),
    left: moderateScale(-15),
  },
});
