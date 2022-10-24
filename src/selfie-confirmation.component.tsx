import {Button, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Description, Title} from "./texts-components";

const SelfieExampleImage = () => <View style={styles.image}>
    <AntDesign name={'camera'} color={'black'} size={232}/>
</View>

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

export const SelfieConfirmationComponent = () => <View style={styles.container}>
    <Title title={''}/>
    <Description description={'we will use your selfie to authenticate your id card in a secure and automated way, make sure that all your face appear in, without glasses or the so called niqab '}/>
    <SelfieExampleImage/>
    <ContinueButton/>
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 44
    },
    image: {
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }
})