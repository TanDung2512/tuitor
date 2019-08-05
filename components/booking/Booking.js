import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class Booking extends React.Component {
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
                <Text>Booking</Text>
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
