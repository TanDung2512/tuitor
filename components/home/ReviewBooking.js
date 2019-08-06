import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CategoryWrapper from './CategoryWrapper';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const paddingContainer = 40

const ItemWrapper = props => {
    return (
        <View style = {{borderBottomWidth : 1, justifyContent : "center",borderBottomColor : "#EEF", height : 100, width : screenWidth}}>
            <Text style = {{color : "gray", fontWeight : "bold"}}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const Button = props => {
    return (
        <TouchableOpacity
            onPress = {props.toggleBtn}

        >
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ReviewBooking = props => {
    const toggleBtn = _ => {
        props.navigation.navigate('SearchResult')
    }
    return (
        <ScrollView>
        <View style = {styles.container}>
            <Text style = {{fontSize : 35, fontWeight : "bold"}}>Review Booking</Text>
            <ItemWrapper title = "Date & Time">
                <Text style = {styles.info}>Monday, October 24</Text>
                <Text style = {styles.subInfo}>10:00 AM</Text>
            </ItemWrapper>
            <ItemWrapper title = "Teacher">
                <Text style = {styles.info}>Nguyen Ba Loc</Text>
                <Text style = {styles.subInfo}>English Language</Text>
            </ItemWrapper>
            <ItemWrapper title = "Address">
                <Text style = {styles.info}>San Francisco, California</Text>
                <Text style = {styles.subInfo}>0.31 mil away</Text>
            </ItemWrapper>
            <ItemWrapper title = "Payment Method">
                <Text style = {styles.info}>Apple Pay</Text>
            </ItemWrapper>
            <View style = {{marginVertical : 20}}>
                <Text style = {{color : "gray", fontWeight : "bold"}}>Price</Text>
                <Text style = {{fontSize : 22, fontWeight : "bold", marginVertical : 2}}>$60</Text>
                <View style = {{flexDirection : "row", width : "100%", justifyContent : "space-between"}}>
                    <Text style = {{fontSize : 16, fontWeight : "600"}}>Total hour</Text>
                    <Text style = {{fontSize : 16, fontWeight : "600"}}>5</Text>
                </View>
                <View style = {{flexDirection : "row", width : "100%", marginVertical : 20, justifyContent : "space-between"}}>
                    <Text style = {{fontSize : 16, fontWeight : "600"}}>Total</Text>
                    <Text style = {{fontSize : 16, fontWeight : "bold"}}>$120</Text>
                </View>
            </View>
            <View style = {{alignSelf: "center"}}>
                <Button name = "Confirm" toggleBtn = {toggleBtn}/>
            </View>
        </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      padding : 20,
      marginBottom : 20,
      alignItems: 'flex-start',
      width : screenWidth,
    },
    info : {
        fontWeight : "600",
        fontSize : 20
    },
    subInfo : {
        fontWeight : "500"
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
  