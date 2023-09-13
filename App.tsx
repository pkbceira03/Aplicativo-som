import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MusicPlayer from './components/MusicPlayer';


const App = () => {

  return (
    <View style={styles.container}>
      <MusicPlayer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App;
