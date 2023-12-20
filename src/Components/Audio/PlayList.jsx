import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/colors';
import {moderateScale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import {fonts} from '../../Utils/fonts';
import Next from 'react-native-vector-icons/AntDesign';

const PlayList = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.playlistContainer}
        onPress={() => props.navigation.navigate(props.screenName)}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.coverImage}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              width={moderateScale(80)}
              height={moderateScale(80)}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text variant="titleLarge" style={styles.playlistName}>
              Your Playlist
            </Text>
            <Text variant="titleMedium" style={styles.trackCount}>
              12 Tracks
            </Text>
          </View>
        </View>
        <View style={styles.navigationIcon}>
          <Next name="right" color={colors.WHITE} size={moderateScale(25)} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  playlistContainer: {
    padding: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  innerContainer: {
    flexDirection: 'row',
  },

  coverImage: {
    borderRadius: moderateScale(10),
  },

  playlistName: {
    fontFamily: fonts.BOLD,
    color:colors.BLACK,
    paddingHorizontal: moderateScale(15),
  },

  trackCount: {
    color: colors.BLACK,
    fontFamily: fonts.MEDIUM,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },

  infoContainer: {
    justifyContent: 'center',
  },

  navigationIcon: {
    justifyContent: 'center',
  },
});

export default PlayList;
