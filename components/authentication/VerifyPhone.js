import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import InputWrapper from './InputWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class VerifyPhone extends React.Component {
    static navigationOptions = {
        header : null
      };
    constructor(props){
        super(props)
        this.state = {
            code : ""
        }
    }
    handleChange = (type, value) => {
        this.setState({[type] : value})
    }

    handleVerify = _ => {
        this.props.navigation.navigate('Home')
    }
    render(){
        return (
            <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator = {false}
            >
                <View style={styles.containerScrollView}>
                    <Text style = {{fontSize : 50, fontWeight : "bold", flexShrink: 1}}>Verifying Your Number</Text>
                    <Text style = {{fontSize : 25, color : "gray", marginVertical : 20}}>We've sent your verification code to </Text>
                    <InputWrapper name = "code" title = "Enter code" placeholder = "" type = "oneTimeCode" onChange = {this.handleChange} value = {this.state.code}/>
                    <TouchableOpacity
                        onPress = {this.handleVerify}
                    >
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText}>Verify</Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {{flexDirection : "row", justifyContent : "space-between", width : screenWidth - 60}}>
                        <TouchableOpacity onPress = {() => Alert.alert("press sign in !")}>
                            <Text style = {{fontWeight : "bold"}}>
                                Resend Code
                            </Text>
                        </TouchableOpacity>
                        <Text style = {{color : "rgb(140,140,140)"}}>
                                1:20 min left
                        </Text>
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
