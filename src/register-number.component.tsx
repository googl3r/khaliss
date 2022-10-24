import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {FC} from "react";


const SubscriptionTitle = () => {
    return (
        <View style={{ display: 'flex', alignItems: 'flex-start'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Subscribe to Khaliss</Text>
        </View>
    )
}
const SubscriptionDescription = () => {
    return (
        <Text style={{ fontWeight: '300', opacity: 0.3, paddingTop: 5}}>
            it's possible that we register this number for verification purpose.
        </Text>
    )
}

const NumberFields = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row',
            marginTop: 24, justifyContent: 'space-around'}}>
            <TextInput
                placeholder={'+222'}
                style={{ backgroundColor: '#F5F2F1', flex: 1, textAlign: 'center', marginRight: 12, borderRadius: 8}}/>
            <TextInput
                placeholder={'46445634'}
                style={{ backgroundColor: '#F5F2F1', textAlign: 'center', height: 40, flex: 2, borderRadius: 8 }}/>
        </View>
    )
}
const ConnexionLink = () => {
    return (
        <Text style={{ color: '#2596be', fontWeight: 'bold', paddingTop: 24, fontSize: 12 }}>
            do you already have an account ? connect
        </Text>
    )
}
const NumberRegistrationButton = () => {
    return(
        <View style={{
            backgroundColor: '#212121',
            borderStyle: 'solid',
            marginTop: 'auto',
            borderWidth: 2,
            borderColor: '#212121',
            borderRadius: 8,
            shadowColor: 'F5F2F1',
            shadowRadius: 8,
            shadowOpacity: 0.4,
            shadowOffset: { width: 2, height: 1 },
            elevation: 5
        }}>
            <Button color={'white'} title={'Register'}></Button>
        </View>
    )
}

export const RegisterPhoneNumber: FC = () => {
    return (
        <View style={[styles.container, {
            flexDirection: 'column',
            marginTop: 44
        }]}>
            <SubscriptionTitle/>
            <SubscriptionDescription/>
            <NumberFields/>
            <ConnexionLink/>
            <NumberRegistrationButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})