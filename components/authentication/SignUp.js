import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import InputWrapper from './InputWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name  : "",
            email : "",
            password : "",
            confirmedPassword : "",
            phone : ""
        }
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
                    <View style = {{flexDirection : "row", alignItems : "center", justifyContent : "center"}}>
                        <View style = {{ width: 0,flexGrow: 1}}>
                            <Text style = {{fontSize : 50, fontWeight : "bold", flexShrink: 1}}>Welcome user</Text>
                            <Text style = {{fontSize : 25, color : "gray", marginVertical : 20}}>Sign up to join</Text>
                        </View>
                        <Image source = {require('../../assets/boy.png')} style = {{width : 80, height : 80, borderRadius : 40}}/>
                    </View>

                    <InputWrapper name = "name" title = "Username" placeholder = "User name" type = "username" onChange = {this.handleChange} value = {this.state.name}/>
                    <InputWrapper name = "email" title = "Email" placeholder = "Email" type = "emailAddress" onChange = {this.handleChange} value = {this.state.email}/>
                    <InputWrapper name = "password" title = "Password" placeholder = "password" type = "password" onChange = {this.handleChange} value = {this.state.password}/>
                    <InputWrapper name = "confirmedPassword" title = "Confirmed Password" placeholder = "Confirmed Password" type = "password" onChange = {this.handleChange} value = {this.state.confirmedPassword}/>
                    <InputWrapper name = "phone" title = "Your Phone number" placeholder = "0000" type = "telephoneNumber" onChange = {this.handleChange} value = {this.state.phone}/>

                    <View style = {{flexDirection : "row", marginVertical : 10}}>
                        <Image source = {require('../../assets/checked.png')} style = {{width : 20, height : 20, marginRight : 10}}/>
                        <Text>I agree to the </Text>
                        <Text style = {{fontWeight : "bold"}}>Term of Service</Text>
                    </View>
                    <TouchableOpacity
                        onPress = { () => Alert.alert("press Sign Up")}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <View style = {{justifyContent : "center", flexDirection : "row", width : screenWidth - 60}}>
                            <Text>Have an account?</Text>
                            <TouchableOpacity onPress = {() => Alert.alert("press sign in !")}>
                                <Text style = {{fontWeight : "bold"}}>
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        paddingVertical : 100,
        paddingBottom : 200,
    },
    button : {
        width   : screenWidth - 60,
        backgroundColor : "rgb(66, 72, 245)",
        alignItems      : "center",
        justifyContent  : "center",
        paddingVertical : 15,
        borderRadius : 10,
        marginVertical : 20
    },
    buttonText : {
        color       : "white",
        fontWeight  : "bold",
        fontSize    : 20,
    },

});
