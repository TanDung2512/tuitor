import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import InputWrapper from './InputWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class VerifyPhone extends React.Component {
    constructor(props){
        super(props)
    }
    handleChange = (type, value) => {
        this.setState({[type] : value})
    }
    render(){
        return (
            <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator = {false}
            >
                <View style={styles.containerScrollView}>
                    <Image source = {require('../../assets/location_icon.png')} style = {{width :60, height : 60, marginBottom : 30}}/>
                    <Text style = {{fontSize : 50, fontWeight : "bold", flexShrink: 1}}>Hello, nice to meet you!</Text>
                    <Text style = {{fontSize : 25, color : "gray", marginVertical : 20}}>Set your location to start to find teachers around you</Text>
                    <TouchableOpacity onPress = { () => Alert.alert("press Sign Up")}>
                        <View style = {styles.button}>
                           <Image source = {require('../../assets/send_button.png')} style = {{width :20, height : 20, marginHorizontal : 10}}/>
                            <Text style = {styles.buttonText}>Use current location</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style = {{fontSize : 20, color : "gray", marginVertical : 20}}>We only access your location while you are using this incredible app</Text>
                    <TouchableOpacity onPress = {() => Alert.alert("press sign in !")}>
                        <Text style = {{fontWeight : "bold"}}>
                            Or set your location manually
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>

          );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal : 30,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent : 'center',
        height : screenHeight,
    },
    containerScrollView: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent : 'center',
        width : screenWidth - 60,
        paddingVertical : 60,
        paddingBottom : 200,
    },
    button : {
        width   : screenWidth - 60,
        backgroundColor : "rgb(66, 72, 245)",
        alignItems      : "center",
        justifyContent  : "center",
        paddingVertical : 15,
        borderRadius : 10,
        marginVertical : 20,
        flexDirection : "row"
    },
    buttonText : {
        color       : "white",
        fontWeight  : "bold",
        fontSize    : 20,
    },

});
