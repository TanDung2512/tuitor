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
    myScroll;
    nextView = (index) => {
      if( index  == coreValues.length){
        return
      }
      this.myScroll.scrollTo({x: screenWidth*index, y: 0, animated: true})
    }
    render(){
        return (
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
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
    width : screenWidth,
    margin : 0
  },
  coreValueContainer : {
    flex : 1,
    width : screenWidth,
    alignItems: 'center',
    margin : 0 ,
    padding : 0
    // justifyContent: 'center',
  },
  coreValueImage : {
    width     : screenWidth,
    height    : screenHeight/2,
  },
  coreValueTitle : {
    fontSize : 30,
    fontWeight : "bold"
  },
  coreValueExplain : {
    textAlign : "center",
    padding : 30,
    fontSize : 18
  },
  coreValueIconDots : {
    flexDirection : "row",
  },
  coreValueIconDot : {
    width  :10,
    height : 10,
    borderRadius : 5,
    borderColor : "black",
    marginHorizontal : 3,
    backgroundColor : "white",
    borderWidth: 0.5,
  },

});
