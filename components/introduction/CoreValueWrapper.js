import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function CoreValueWrapper(props) {


    const coreValue = props.coreValue
    const {step, lastStep, scrollTo} = props

    return (
        <View style = {styles.coreValueContainer}>
            <View style = {{position : "relative", top : 0}}>
                <Image source = {coreValue.image} style = {styles.coreValueImage}/>
                
                <View style = {{ position : "absolute", left : screenWidth/2 - 20, bottom : -20, backgroundColor : "rgb(66, 72, 245)", width : 50, height : 50, borderRadius : 25, alignItems : "center", justifyContent : "center"}}>  	
                  <Icon name="search1" size={25} color="white" />
                </View>
            </View>
            <View style = {{flex : 1, justifyContent : "center", alignItems : "center"}}>

              <Text style = {{fontSize : 15, color : "rgb(66, 72, 245)" }}>{coreValue.type}</Text>
              <Text style = {styles.coreValueTitle}>{coreValue.title}</Text>
              <Text style = {styles.coreValueExplain}>{coreValue.explain}</Text>
              <View style = {styles.coreValueIconDots}>
                  {
                      [0,1,2].map((dot,index) =>  <View key = {index} style = {step != dot ? styles.coreValueIconDot : styles.coreValueIconDot__blue}/>)
                  }
              </View>
              <View style = {{flex : 0.5, justifyContent : "center", fontSize : 15}}>
                  <TouchableOpacity
                      onPress = {() => {scrollTo(step + 1)}}
                  >
                      <Text>{lastStep ? "Get Started" : "Skip"}</Text>
                  </TouchableOpacity>
              </View>
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
    borderWidth: 2,
  },
  coreValueIconDot__blue : {
    width  :10,
    height : 10,
    borderRadius : 5,
    borderColor : "rgb(66, 72, 245)",
    marginHorizontal : 3,
    backgroundColor : "rgb(66, 72, 245)",
    borderWidth: 2,
  },

});
