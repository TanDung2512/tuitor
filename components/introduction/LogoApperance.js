import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LogoApperance extends React.Component {
    
    render(){
        return (
            <View style={styles.container}>
                <View style = {{flexDirection : "row", alignItems : "center"}}>
                    <Image source = {require('../../assets/introduction/brain.png')} style = {styles.image}/>
                    <Text style = {styles.text}>Learnto</Text>
                </View>   
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(rgb(66, 72, 245))',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width : 80,
    height : 80,
  },
  text : {
    fontSize : 20,
    color : 'white'
}

});
