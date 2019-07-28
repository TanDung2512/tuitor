import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CategoryWrapper from './CategoryWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const paddingContainer = 40
export default class Home extends React.Component {

    render(){
        return (
            <View style = {styles.container}>
                <Text style = {{fontSize : 40, fontWeight : "bold"}}>Browse</Text>
                <View style = {styles.section}>
                    <View style = {{flexDirection : "row", justifyContent : "space-between", alignItems : "center",width : screenWidth - paddingContainer}}>
                        <Text style = {{fontWeight : "bold", fontSize : 25}}>Categories</Text>
                        <TouchableOpacity>
                          <Text style = {{color : "rgb(66, 72, 245)"}}>See all ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection : "row", width : screenWidth - paddingContainer}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                            <CategoryWrapper/>
                            <CategoryWrapper/>
                            <CategoryWrapper/>
                            <CategoryWrapper/>
                            <CategoryWrapper/>
                            <CategoryWrapper/>
                        </ScrollView>
                    </View>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding : 20,
    marginVertical : 20,
    alignItems: 'flex-start',
    width : screenWidth - 20,
    height : screenHeight,
  },
  section : {
    marginVertical : 20,
  }

});
