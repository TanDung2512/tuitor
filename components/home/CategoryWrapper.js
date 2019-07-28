import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput} from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function CategoryWrapper(props) {

    return (
        <View style = {{marginVertical : 10, marginRight : 15}}>
            <View>
                <View style = {{backgroundColor : "rgb(66, 72, 245)", borderRadius : 10, justifyContent : "center", alignItems : "center", width : 100, height : 100}}>
                    <Image source = {require('../../assets/home/drawing.png')} style = {{width : 50, height : 50}}/>
                </View>
            </View>
            <Text style = {{fontWeight : "bold", marginVertical : 5}}>Drawing</Text>
            <Text style = {{color : "gray"}}>93 tutors</Text>
        </View> 
        );
}

const styles = StyleSheet.create({

});
