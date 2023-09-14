import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const {width, heigth} = Dimensions.get("window");

const MusicPlayer = () =>{
  

    return(
      <SafeAreaView style={styles.container}> 
        <View style={styles.containerPrincipal}> 
          <View style={styles.ImagesWrapper}>
            <Image 
              source={require('../assets/images/kiss.jpeg')}
              style={styles.imgEdit}
            />
          </View>
        </View>

        <View style={styles.bottonContainer}>
          <View style = {styles.bottonControll}> 
            <TouchableOpacity onPress={()=>{}}>
              <Text>oi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
              <Text>oi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
              <Text>oi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
              <Text>oi</Text>
            </TouchableOpacity>
            
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

  ImagesWrapper:{
    width:300,
    height:300,
    marginBottom:25,
    shadowColor:'#ccc',
    shadowOffset:{
      width:5,
      heigth:5
    },
    shadowOpacity:0.5,
    shadowRadius:3.9,
    elevation:5,
  },

  imgEdit:{
    width:'100%',
    height:'100%',
    borderRadius:15,
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