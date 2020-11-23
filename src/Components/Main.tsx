import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { RouteComponentProps } from 'react-router-dom'

// const electron = window.require('electron');
// const { ipcRenderer } = electron;

interface Props extends RouteComponentProps{}

const Main: React.FC<Props> = ({history}) => {
    const handleClick = () => {
        history.push('/other');
        // ipcRenderer.send('send:msg', 'Hello from Main');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HELLO FROM REACT NATIVE</Text>
            <Button title="GO TO OTHER" onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 36,
        color: '#FFF'
    }
})

export default Main
