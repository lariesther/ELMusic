import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import songs from './model/data';

const { width, height } = Dimensions.get('window');
export default function App() {
  const renderSongs = ({ item, index }) => {
    return (
      <View style={styles.mainImageWrapper}>
       <View style={[styles.imageWrapper, styles.elevation]}>
          <Image
            source={item.atwork}
            style={styles.musicImage}
          />
        </View>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>

        <FlatList 
          data={songs}
          keyEstractor={item => item.id}
          renderItem={renderSongs}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={() => { }}
        />

        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            Título da Música
          </Text>
          <Text style={[styles.songContent, styles.songArtitst]}>
            Autor da Música
          </Text>
        </View>

        <View>
          <Slider
            stye={styles.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='#FFD369'
            minimumTrackTintColor='#FFD369'
            maximumTrackTintColor='#fff'
            onSlidingComplete={() => { }} />

          <View style={styles.progressLevelDuration}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>00:00</Text>
          </View>
        </View>

        <View style={styles.musicControlsContainer}>
          <TouchableOpacity>
            <Ionicons name='play-skip-back-outline' size={35} color='#FFD369' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='pause-circle' size={75} color='#FFD369'></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='play-skip-forward-outline' size={35} color='#FFD369'></Ionicons>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.footer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} coplor="#88888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} coplor="#88888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} coplor="#88888" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} coplor="#88888" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 25,
    borderTopColor: "#393E45",
    borderTopWidth: 1,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  imageWrapper: {
    widht: 340,
    height: 360,
    marginVertical: 20,
  },
  elevation: {
    elevation: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE'
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',

  },
  songArtitst: {
    fontSize: 16,
    fontWeight: '300'
  },
  progressBar: {
    width: 350,
    height: 40,
    marginTop: 20,
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#fff',
    fontWeight: '500',
  },
  musicControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },

});
