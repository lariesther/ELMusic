import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const {width, height}= Dimensions.get('window');
export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <View style ={ styles.main}>

      </View>
      <View style={style.footer}>
        <View style= {styles.iconWrapper}>
          <TouchableOpacity>
            <IOnicons name='heart-outline' size={30} coplor="#88888"/>
            </TouchableOpacity>
            <TouchableOpacity>
            <IOnicons name='heart-outline' size={30} coplor="#88888"/>
            </TouchableOpacity>
            <TouchableOpacity>
            <IOnicons name='heart-outline' size={30} coplor="#88888"/>
            </TouchableOpacity>
            <TouchableOpacity>
            <IOnicons name='heart-outline' size={30} coplor="#88888"/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
