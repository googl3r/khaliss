import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {FC} from "react";
import {Description, KhalissButton, Title} from "./texts-components";


const DigitsFields = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 32, justifyContent: 'space-around'}}>
            <TextInput style={styles.digitsStyle}/>
            <TextInput style={styles.digitsStyle}/>
            <TextInput style={styles.digitsStyle}/>
            <TextInput style={styles.digitsStyle}/>
            <TextInput style={styles.digitsStyle}/>
            <TextInput style={{ backgroundColor: '#F5F2F1', flex: 1, textAlign: 'center', height: 40, borderRadius: 8}}/>

        </View>
    )
}


export const VerifyPhoneNumber = () => {
    return (
        <View style={styles.container}>
            <Title title={'Binta code number'}/>
            <Description description={'please enter the six digit number you received by sms'}/>
            <DigitsFields/>
            <KhalissButton title={'Verify your code'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 44
    },
    digitsStyle: {
        backgroundColor: '#F5F2F1',
        flex: 1,
        textAlign: 'center',
        marginRight: 8,
        borderRadius: 8
    }
})