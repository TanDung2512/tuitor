import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import InputWrapper from './InputWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            phone : ""
        }
    }

    handleChange = (type, value) => {
        this.setState({[type] : value})
    }

    handleSignIn = _ => {
        this.props.navigation.navigate('VerifyPhone')
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
                            <Text style = {{fontSize : 25, color : "gray", marginVertical : 20}}>Sign in to join</Text>
                        </View>
                    </View>

                    <InputWrapper name = "phone" title = "Your Phone number" placeholder = "0000" type = "telephoneNumber" onChange = {this.handleChange} value = {this.state.phone}/>
                    <TouchableOpacity
                       onPress = {this.handleSignIn}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <View style = {{justifyContent : "center", flexDirection : "row", width : screenWidth - 60}}>
                            <Text>Dont have an account?</Text>
                            <TouchableOpacity onPress = { () => this.props.navigation.navigate('SignUp')}>
                                <Text style = {{fontWeight : "bold"}}>
                                    Sign Up
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
