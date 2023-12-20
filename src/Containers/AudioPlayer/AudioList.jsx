import {View, StyleSheet} from 'react-native';
import React from 'react';
import TopTab from '../../Components/Tab/TopTab';
import AllSongs from './AllSongs';
import PlayList from './PlayListGroup';
import {colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';
import {moderateScale} from 'react-native-size-matters';
import {Text} from 'react-native-paper';
import {AllSongsLogic} from '../../Functions/Audio/AllSongs';

const AudioList = () => {
  const {tabData, isLoading} = AllSongsLogic();
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge" style={styles.headerTitle}>
        AudioPlayer
      </Text>
      <TopTab data={tabData} isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  headerTitle: {
    color: colors.BLACK,
    fontFamily: fonts.BOLD,
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
    paddingVertical: moderateScale(10),
    fontSize: moderateScale(25),
    alignSelf: 'center',
  },
});

export default AudioList;
