import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Button = (props) => <TouchableOpacity
    >
    <View style = {styles.button}>
        <Text style = {styles.buttonText}>{props.name}</Text>
    </View>
</TouchableOpacity>

export default function SearchResult(props){
    return(
        <View style = {styles.container}>
            <Image source = {require('../../assets/home/checked.png')}/>
            <Text style = {{fontSize : 40, fontWeight : 'bold'}}>Success !</Text>
            <Text style = {{textAlign : "center", color : "gray"}}>Thank you for choosing our service and trust our teacher to help and teach you</Text>
            <View style = {styles.infoContainer}>
                <Image source = {require('../../assets/home/avatar.jpg')} style = {{width : 100, height : 100, borderRadius : 50}}/>
                <View style = {styles.detailContainer}>
                    <Text style = {{fontWeight : "bold", fontSize : 20}}>Alice Daniela</Text>
                    <Text style = {{color : "gray", fontSize : 15}}>English Language</Text>
                </View>
                <View style = {styles.detailContainer}>
                    <Text style = {{color : "gray" }}>Date & Time</Text>
                    <Text style = {{fontWeight : "bold", fontSize : 20}}>Monday, October 24</Text>
                    <Text style = {{fontWeight : "600", fontSize : 17}}>10:00 AM</Text>
                </View>
                <View style = {styles.detailContainer}>
                    <Text style = {{color : "gray", fontSize : 20}}>Address</Text>
                    <Text style = {{fontWeight : "bold", fontSize : 20}}>San Francisco, California</Text>
                    <Text style = {{fontWeight : "600", fontSize : 17}}>0.31 mil away</Text>
                </View>
            </View>
            <Button name = "Check Details"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingHorizontal : 30,
        backgroundColor: '#EFF',
        alignItems: 'center',
        justifyContent : 'center',
    },
    infoContainer : {
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginVertical : 20,
        padding : 30
    },
    detailContainer : {
        marginVertical : 10,
        alignItems : 'center'
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
