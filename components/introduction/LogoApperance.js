import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class LogoApperance extends React.Component {
  static navigationOptions = {
    headerTransparent : true
  };
  componentDidMount(){
    setTimeout( () => this.props.navigation.navigate('CoreValue'), 2000)
  }
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
    height : screenHeight,
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
