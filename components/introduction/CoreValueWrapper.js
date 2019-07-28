import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function CoreValueWrapper(props) {


    const coreValue = props.coreValue
    const {step, lastStep, scrollTo} = props

    return (
        <View style = {styles.coreValueContainer}>
            <View style = {{position : "relative"}}>
                <Image source = {coreValue.image} resizeMode={'contain'} style = {styles.coreValueImage}/>
                <View style = {{ position : "absolute", left : screenWidth/2 - 20, bottom : 20, backgroundColor : "rgb(66, 72, 245)", padding : 15, width : 40, height : 40, borderRadius : 20, alignItems : "center", justifyContent : "center"}}>
                    <Image source = {coreValue.icon} style = {{width : 20, height : 20}}/>
                </View>
            </View>
            <Text style = {{fontSize : 15, color : "rgb(66, 72, 245)" }}>{coreValue.type}</Text>
            <Text style = {styles.coreValueTitle}>{coreValue.title}</Text>
            <Text style = {styles.coreValueExplain}>{coreValue.explain}</Text>
            <View style = {styles.coreValueIconDots}>
                {
                    [0,1,2].map((dot,index) =>  <View key = {index} style = {step != dot ? styles.coreValueIconDot : styles.coreValueIconDot__blue}/>)
                }
            </View>
            <View style = {{flex : 1 , justifyContent : "center", fontSize : 15}}>
                <TouchableOpacity
                    onPress = {() => {scrollTo(step + 1)}}
                >
                    <Text>{lastStep ? "Get Started" : "Skip"}</Text>
                </TouchableOpacity>
            </View>
        </View> 
            
        );
}

const styles = StyleSheet.create({
  coreValueContainer : {
    flex : 1,
    width : screenWidth,
    alignItems: 'center',
    margin : 0 ,
    padding : 0
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
    borderWidth: 1,
  },
  coreValueIconDot__blue : {
    width  :10,
    height : 10,
    borderRadius : 5,
    borderColor : "black",
    marginHorizontal : 3,
    backgroundColor : "rgb(66, 72, 245)",
    borderWidth: 1,
  },

});
