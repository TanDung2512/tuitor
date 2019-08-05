import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CoreValueWrapper from './CoreValueWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const coreValues = [
  {
    title : "Discover",
    explain : "Find the perfect Teacher in your own neighborhood for you or for someone you love",
    image : require(`../../assets/introduction/core_value_1.jpg`),
    icon  : require(`../../assets/introduction/search.png`)
    
  },
  {
    title : "Discover",
    explain : "Find the perfect Teacher in your own neighborhood for you or for someone you love",
    image : require(`../../assets/introduction/core_value_1.jpg`),
    icon  : require(`../../assets/introduction/search.png`)
  },
  {
    title : "Discover",
    explain : "Find the perfect Teacher in your own neighborhood for you or for someone you love",
    image : require(`../../assets/introduction/core_value_1.jpg`),
    icon  : require(`../../assets/introduction/search.png`)
  }
]
export default class CoreValue extends React.Component {
    static navigationOptions = {
      header : null
    };
    myScroll;
    nextView = (index) => {
      if( index  == coreValues.length){
        this.props.navigation.navigate('SignUp')
        return
      }
      this.myScroll.scrollTo({x: screenWidth*index, y: 0, animated: true})
    }
    render(){
        return (
          <View style = {{flex : 1, marginTop : 0}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator
              pagingEnabled
              ref={(ref) => this.myScroll = ref}
            >
              { 
                coreValues.map( (coreValue, index) => {
                  if ( coreValues.length - 1 !== index){
                    return (<CoreValueWrapper key = {index} coreValue = {coreValue} step = {index} lastStep = {false} scrollTo = {this.nextView}/>)
                  }
                  else{
                    return (<CoreValueWrapper key = {index} coreValue = {coreValue} step = {index} lastStep = {true} scrollTo = {this.nextView}/> )
                  } 
                })
              }
            </ScrollView>
          </View>
          );
    }
}

// const styles = StyleSheet.create({

// });
