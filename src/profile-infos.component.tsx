import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {FC} from "react";

const ProfileTitle = () => {
    return (
        <View style={{ display: 'flex', alignItems: 'flex-start'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24}}>
                Profile Infos
            </Text>
        </View>
    )
}
const ProfileDescription = () => {
    return (
        <Text style={{ fontWeight: '300', opacity: 0.3, paddingTop: 5, fontSize: 16}}>
            fill your profile info this as they are in your NIN
        </Text>
    )
}

const ProfileFields = () => {
    return (
        <View style={styles.profileFields}>
            <FirstNameField/>
            <LastNameField/>
            <UserNameField/>
            <EmailField/>
        </View>
    )
}

const ContinueButton = () => {
    return (
        <View style={{
            backgroundColor: '#212121',
            borderStyle: 'solid',
            marginTop: 'auto',
            borderWidth: 2,
            borderColor: '#212121',
            borderRadius: 8,
            shadowColor: '#F5F2F1',
            shadowRadius: 8,
            shadowOpacity: 0.4,
            shadowOffset: {
                width: 4, height: 1
            },
            elevation: 5
        }}>
            <Button color={'white'} title={'Continue'}></Button>
        </View>
    )
}
const FirstNameField = () => {
    return(
        <TextInput
            placeholder={'Your First Name in your NIN'}
            style={{ backgroundColor: '#F5F2F1', height: 48, textAlign: 'center',
                borderRadius: 8, marginVertical: 24 / 2 }}
        />
    )
}
const LastNameField = () => {
    return(
        <TextInput
            placeholder={'Your Last Name in your NIN'}
            style={{ backgroundColor: '#F5F2F1', height: 48, textAlign: 'center',
                borderRadius: 8, marginVertical: 24 / 2 }}
        />
    )
}

const UserNameField =() => {
    return (
        <TextInput
            placeholder={'your username'}
            style={{ backgroundColor: '#F5F2F1', height: 48, textAlign: 'center',
                borderRadius: 8, marginVertical: 24 / 2 }}
        />
    )
}

const EmailField = () => {
    return (
        <TextInput
            placeholder={'your email'}
            style={{ backgroundColor: '#F5F2F1', height: 48, textAlign: 'center',
                borderRadius: 8, marginVertical: 24/ 2 }}
        />
    )
}

export const ProfileInfos: FC = () => {
    return (
        <View style={styles.container}>
            <ProfileTitle/>
            <ProfileDescription/>
            <ProfileFields/>
            <ContinueButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 44
    },
    profileFields: {
        marginTop: 44,
        flexDirection: 'column',
        marginVertical: (24 / - 2)
    }
})