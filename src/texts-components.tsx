import {Button, Text, View} from "react-native";
import React, {useEffect} from "react";

type AppPros = {
    title?: string,
    description?: string
}
//destructing in javascript
export const Title = ({ title }: AppPros) => {
    return (
        <View style={{ alignItems: 'flex-start'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24}}>
                { title }
            </Text>
        </View>
    )
}

export const Description = ({ description } : AppPros) => <Text style={{
    fontWeight: '300',
    opacity: 0.3,
    paddingTop: 5,
    fontSize: 16
}}>
    { description }
</Text>

export const KhalissButton = ({ title }: AppPros) => <View style={{
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
    <Button color={'white'} title={title + ''}></Button>
</View>