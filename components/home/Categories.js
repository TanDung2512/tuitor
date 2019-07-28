import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput} from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const paddingContainer = 40
export default function InputWrapper(props) {
    const {name, title, placeholder, type, value, onChange} = props

    return (
        <View style = {styles.container}>
            <Text style = {{fontSize : 40, fontWeight : "bold"}}>Categories</Text>
            <View style = {styles.categoryContainer}>
                <Image source source = {require('../../assets/home/drawing_background.jpg')} style = {{width : screenWidth - paddingContainer, height : 145, resizeMode : "cover"}}/>
                <View style={styles.overlay}>
                    <Text style = {{fontSize : 40, color :"white", fontWeight : "bold"}}>Drawing</Text>
                    <View style = {{flexDirection : "row"}}>
                        <Text style = {{fontSize : 20, color :"white"}}>746 tuitors - </Text>
                        <Text style = {{fontSize : 20, color :"white"}}>from $10</Text>
                    </View>
                </View> 
            </View>

            <View style = {styles.categoryContainer}>
                <Image source source = {require('../../assets/home/drawing_background.jpg')} style = {{width : screenWidth - paddingContainer, height : 145, resizeMode : "cover"}}/>
                <View style={styles.overlay}>
                    <Text style = {{fontSize : 40, color :"white", fontWeight : "bold"}}>Drawing</Text>
                    <View style = {{flexDirection : "row"}}>
                        <Text style = {{fontSize : 20, color :"white"}}>746 tuitors - </Text>
                        <Text style = {{fontSize : 20, color :"white"}}>from $10</Text>
                    </View>
                </View> 
            </View>

            <View style = {styles.categoryContainer}>
                <Image source source = {require('../../assets/home/drawing_background.jpg')} style = {{width : screenWidth - paddingContainer, height : 145, resizeMode : "cover"}}/>
                <View style={styles.overlay}>
                    <Text style = {{fontSize : 40, color :"white", fontWeight : "bold"}}>Drawing</Text>
                    <View style = {{flexDirection : "row"}}>
                        <Text style = {{fontSize : 20, color :"white"}}>746 tuitors - </Text>
                        <Text style = {{fontSize : 20, color :"white"}}>from $10</Text>
                    </View>
                </View> 
            </View>

            <View style = {styles.categoryContainer}>
                <Image source source = {require('../../assets/home/drawing_background.jpg')} style = {{width : screenWidth - paddingContainer, height : 145, resizeMode : "cover"}}/>
                <View style={styles.overlay}>
                    <Text style = {{fontSize : 40, color :"white", fontWeight : "bold"}}>Drawing</Text>
                    <View style = {{flexDirection : "row"}}>
                        <Text style = {{fontSize : 20, color :"white"}}>746 tuitors - </Text>
                        <Text style = {{fontSize : 20, color :"white"}}>from $10</Text>
                    </View>
                </View> 
            </View>
         </View>
        
    );
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
    overlay : {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
        justifyContent : "center",
        alignItems     : "flex-start",
        paddingLeft    : 30
    },
    categoryContainer : {
        borderRadius : 15, 
        overflow: 'hidden',
        marginVertical : 6
    }
});
