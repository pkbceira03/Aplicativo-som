import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icon/Ionicons';

const MusicPlayer = () =>{
  const {width, heigth} = Dimensions.get("window");

    return(
      <SafeAreaView style={styles.container}> 
        <View style={styles.containerPrincipal}> 
          
        </View>

        <View style={styles.bottonContainer}>
          <View style = {styles.bottonControll}> 
            <Ionicons name="heart-outline" size={30}/>
            <Ionicons name="repeat" size={30}/>
          </View>
        </View>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0d2536'
  },
  
  containerPrincipal:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonContainer: {
    borderTopColor: '#ffffff',
    borderTopWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
  },
  bottonControll:{
    flexDirection: "row", 
    justifyContent: 'space-between', 
    width:"80%",
  }
});

export default MusicPlayer;