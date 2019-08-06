import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Button = (props) => {

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

const RateFigure = (props) => <View style = {styles.figureContainer}>
    <Text style = {styles.numRate}>{props.num}</Text>
    <Text style = {styles.textRate}>{props.type}</Text>
</View>

const StarRating = (props) => (
    <View style = {{flexDirection : "row"}}>
        <Icon name="star" type = "antdesign" size={12} color="orange" />
        <Icon name="star" type = "antdesign" size={12} color="orange" />
        <Icon name="star" type = "antdesign" size={12} color="orange" />
        <Icon name="star" type = "antdesign" size={12} color="orange" />
        <Icon name="star" type = "antdesign" size={12} color="orange" />
    </View>
)
const Review = (props) => (
    <View>
        <View style = {{flexDirection : "row", alignItems : "center"}}>
            <Image source = {require('../../assets/home/avatar.jpg')} style = {{width :50, height :50, borderRadius : 25, marginRight : 10}}/>
            <View>
                <Text style = {{fontWeight : "500", fontSize : 20}}>Nguyen Tan Dung</Text>
                <View style = {{flexDirection : "row"}}>
                    <StarRating/>
                    <Text style = {{color : "gray"}}>15 minutes ago</Text>
                </View>
            </View>
        </View>
        <View style = {{ marginVertical : 10}}>
            <Text style = {{fontWeight : "400", fontSize : 20}}>
                qwdqwdqwdqwdqwdqwdqwdqwdqwdqwd qw dqw dqw dkq krerqr
            </Text>
        </View>
        <Button name = "Book Now" toggleBtn = {props.toggleBtn}/>
    </View>
)
export default function CheckDetail(props){

    const toggleBtn = _ => {

        props.navigation.navigate('ReviewBooking')
    }
    return(

    <ScrollView>
        <View style = {styles.container}>
            <View style = {styles.introContainer}>
                    <View style = {styles.filter}/>
                    <Image resizeMode = "cover" source = {require('../../assets/home/background_profile.jpeg')} style = {styles.backgroundProfile}/>
                    <View>
                        <Image source = {require('../../assets/home/avatar.jpg')} style = {styles.avatar}/>
                    </View>
                    <View style = {{alignItems : "center"}}>
                        <Text style = {{color : "white", fontWeight : "bold", fontSize : 30}}>Nguyen Tan Dung</Text>
                        <View style = {{flexDirection : "row"}}>
                            <Text style = {{marginHorizontal : 10, color : "white", fontSize : 20, fontWeight : "500"}}>English Language</Text>
                            <Text style = {{marginHorizontal : 10, color : "white", fontSize : 20, fontWeight : "500"}}>7 năm kinh nghiệm</Text>
                        </View>
                        <View style = {{padding : 8, borderRadius : 10, backgroundColor : "rgb(76,106,241)", marginVertical : 10}}>
                            <Text style = {{textAlign : "center", textAlignVertical : "center",color : "white", fontWeight : "bold", fontSize : 16}}>Available</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection : "row", width : screenWidth, justifyContent : "space-around", bottom : 0}}>
                        <RateFigure num = {53} type = "Rating"/>
                        <RateFigure num = {92} type = "Reviews"/>
                        <RateFigure num = {24} type = "Years old"/>
                    </View>
                </View>
            <View >
                <View style = {{flexDirection : "row"}}>
                    <View style = {styles.addInfoContainer}>
                        <Text style = {{color : "rgb(66, 72, 245)", fontWeight : "600", fontSize : 16}}>Hourly Rate</Text>
                        <View style = {{flexDirection : "row", alignItems : "center"}}>
                            <Text style = {{fontWeight : "bold", fontSize : 20, marginRight : 3}}>$75</Text>
                            <Text>per hour</Text>
                        </View>
                        
                    </View>
                    <View style = {styles.addInfoContainer}>
                        <Text style = {{color : "rgb(66, 72, 245)", fontWeight : "600", fontSize : 16}}>Completed</Text>
                        <View style = {{flexDirection : "row", alignItems : "center"}}>
                            <Text style = {{fontWeight : "bold", fontSize : 20, marginRight : 3}}>37</Text>
                            <Text> lessons</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <View>
                        <Text style = {styles.titleText}>Biography</Text>
                        <Text style = {styles.subTitle}>English School</Text>
                        <View>
                            <Image/>
                            <View>
                                <Text style = {{fontSize : 17, fontWeight :"600"}}>Harvard University Faculty</Text>
                                <Text>Houston, Massachuset, USA</Text>
                            </View>
                        </View>
                        <View>
                            <Text style = {styles.subTitle}>Education</Text>
                            <Text style = {{fontSize : 17, fontWeight :"600"}}>Harvard University Faculty</Text>
                        </View>
                        <View>
                            <Text style = {styles.subTitle}>Certification</Text>
                            <Text style = {{fontSize : 17, fontWeight :"600"}}>TEFL Certification, MA Educator</Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {styles.titleText}>Location</Text>             
                        <Text style = {{fontWeight : "500", fontSize : 17}}>43 Bourice Street, Newbridge NSW 837 Raffles Place, Bloat Band M83</Text> 
                    </View>
                    <View >
                        <Text style = {styles.titleText} >Reviews</Text>
                        <Review toggleBtn = {toggleBtn}/>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingHorizontal : 30,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginBottom : 10
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
    figureContainer : {
        alignItems : "center",
    },
    introContainer : {
        position : "relative",
        backgroundColor : "#EEE",
        width : screenWidth,
        height : screenHeight/2,
        alignItems : "center",
        justifyContent : "center",
        
    },
    addInfoContainer : {
        borderRadius : 10,
        backgroundColor : "rgb(249,249,249)",
        paddingVertical : 20,
        paddingRight : 50,
        paddingLeft : 10,
        marginVertical : 20,
        marginRight : 20
        
    },
    buttonText : {
        color       : "white",
        fontWeight  : "bold",
        fontSize    : 20,
    },
    titleText : {
        fontWeight : "bold",
        fontSize : 30,
        marginVertical : 15,
    }, 
    subTitle : {
        color : "gray",
        fontSize : 20,
        fontWeight : "bold",
        marginVertical : 10
    },
    backgroundProfile : {
        ...StyleSheet.absoluteFill,
        height : screenHeight/2
        
    },
     avatar : {
         width : 120,
         height : 120,
         borderRadius : 60
     },
     numRate : {
         color : "white",
         fontWeight : "bold",
         fontSize : 25
     },
     textRate : {
         color : "white",
         fontWeight : "400",
         fontSize : 20
     },
     filter : {
        ...StyleSheet.absoluteFill,
        top: 10,
        backgroundColor: '#000',
     }
});
