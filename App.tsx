import {StyleSheet, TextInput, View} from "react-native";
import {Title} from "./src/texts-components";
import {RegisterPhoneNumber} from "./src/register-number.component";
import {VerifyPhoneNumber} from "./src/verify-phone-number.component";

const PinCodeDigits = () => <View
    style={{ flexDirection: 'row', marginTop: 48, justifyContent: 'space-around'}}>
    <TextInput style={{ backgroundColor: '#F5F2F1', textAlign: 'center', marginRight: 8, width: 40, borderRadius: 8}}/>
    <TextInput style={{ backgroundColor: '#F5F2F1', textAlign: 'center', marginRight: 8, width: 40, borderRadius: 8}}/>
    <TextInput style={{ backgroundColor: '#F5F2F1', textAlign: 'center', marginRight: 8, width: 40, borderRadius: 8}}/>
    <TextInput style={{ backgroundColor: '#F5F2F1', textAlign: 'center', height: 40, width: 40, borderRadius: 8}}/>
</View>

export default function App() {
  return (
      <View style={styles.container}>
          <VerifyPhoneNumber/>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 44
    }
})
