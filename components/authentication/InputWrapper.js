import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput} from 'react-native';
const screenWidth  = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function InputWrapper(props) {
    const {name, title, placeholder, type, value, onChange} = props
    if (name === "password" || name === "confirmedPassword"){
        return (
            <View>
                <Text style = {styles.inputName}>{title}</Text>
                <View  style = {styles.inputBox}>
                    <TextInput
                        style = {styles.inputFont}                            
                        onChangeText={(input) => onChange(name, input)}
                        value = {value}
                        placeholder = {placeholder}
                        textContentType = {type}
                        secureTextEntry
                    />
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style = {styles.inputName}>{title}</Text>
            <View  style = {styles.inputBox}>
                <TextInput
                    style = {styles.inputFont}                            
                    onChangeText={(input) => onChange(name, input)}
                    value = {value}
                    placeholder = {placeholder}
                    textContentType = {type}
                />
            </View>
        </View>
            
        );
}

const styles = StyleSheet.create({
    inputName : {
        marginTop : 20,
        fontSize  : 20,
        color     : "gray"
    },
    inputBox : {
        paddingVertical     : 20,
        borderBottomWidth   : 1,
        borderColor         : "rgb(245,245,245)",
        width               : screenWidth - 60
    },
    inputFont : {
        fontSize : 20
    }
});
