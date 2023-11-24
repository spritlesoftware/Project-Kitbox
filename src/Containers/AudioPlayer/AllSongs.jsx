import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  initPlayer,
  // loadPlaylist,
  handleFavourites,
  handleItemPress,
  playbackTrackChangedListener,
} from '../../Functions/Audio/AllSongs';
import {colors} from '../../Utils/colors';
import {moderateScale} from 'react-native-size-matters';
import SongsList from '../../Components/Audio/SongsList';
import {addTracks, setupPlayer} from './AudioPlayerServices';

function AllSongs() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [favouriteCondition, setFavouriteCondition] = useState(false);

  useEffect(() => {
    async function setup() {
      try {
        let isSetup = await setupPlayer();
        setIsPlayerReady(isSetup);
        const queue = await TrackPlayer.getQueue();
        if (isSetup && queue.length > 0) {
          // await addTracks();
          setQueue(queue);
        }
      } catch (error) {
        console.error('Error during setup:', error);
      }
    }

    setup();
    initPlayer();
  }, []);

  useEffect(() => {
    const listener = playbackTrackChangedListener(setCurrentTrack);

    return () => {
      listener.remove();
    };
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
    if (event.state == State.nextTrack) {
      TrackPlayer.getActiveTrack().then(index => setCurrentTrack(index));
    }
  });

  function HandleFavourites(item) {
    handleFavourites(item, favourites, setFavourites);
  }

  function handlePress(index) {
    handleItemPress(index);
  }

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SongsList
        queue={queue}
        currentTrack={currentTrack}
        favourites={favourites}
        loadPlaylist={() => loadPlaylist(setQueue)}
        HandleFavourites={HandleFavourites}
        handleItemPress={handlePress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
});

export default AllSongs;
