import React, { useState, useEffect } from 'react';
import { View, Animated, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RouteComponentProps } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Carousel from 'nuka-carousel';
// import Carousel from 'react-elastic-carousel';

interface Props extends RouteComponentProps{}

/*const Other: React.FC<Props> = ({history}) => {
    const viewA = new Animated.Value(0);
    const [value, setValue] = useState(0);
    useEffect(()=>{
        Animated.timing(
            viewA,
            {
                toValue: 500,
                duration: 1000,
                useNativeDriver: false
            }
        )
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HELLO FROM OTHER SCREEN</Text>
            <Button title="GO BACK" onPress={()=>history.push('/')} />
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p style={{ fontFamily: 'Muli', fontWeight: 300, color: 'pink' }}>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <Carousel
            height={'500px'}
            width={'500px'}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            renderBottomCenterControls={null}
            slideIndex={value}
            afterSlide={slideIndex => setValue(slideIndex)}
            >
                <img src="https://via.placeholder.com/400/000/c0392b/&text=slide1" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
            </Carousel>
            <TouchableOpacity onPress={()=>value===5?setValue(0): setValue(value+1)}>
                <Text>MOVE</Text>
            </TouchableOpacity>
                <Animated.View 
                style={{ 
                    position: 'absolute', 
                    left: 500,
                    top: viewA,
                    backgroundColor: '#1A91FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    height: 100,
                    width: 100
                }}>
                    <Text 
                    style={{ 
                        fontSize: 12, 
                        color: '#FFFFFF'
                    }}>W</Text>
                </Animated.View>
        </View>
    )
}*/


class Other extends React.Component {
    viewA: Animated.Value;
    constructor(props){
        super(props);
        this.viewA = new Animated.Value(0);
    }
    componentDidMount(){
        Animated.timing(
            this.viewA,
            {
                toValue: 500,
                duration: 10000,
                useNativeDriver: false
            }
        ).start()
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View 
                style={{ 
                    position: 'absolute', 
                    left: 800,
                    top: this.viewA,
                    backgroundColor: '#1A91FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    height: 100,
                    width: 100
                }}>
                    <Text 
                    style={{ 
                        fontSize: 12, 
                        color: '#FFFFFF'
                    }}>W</Text>
                </Animated.View>
                <TouchableOpacity onPress={()=>{
                    Animated.timing(
                        this.viewA,
                        {
                            toValue: 800,
                            duration: 10000,
                            useNativeDriver: false
                        }
                    ).start()
                    console.log('SUCCESS')
                }}>
                    <Text>MOVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 36,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Muli',
        fontWeight: '300'
    }
})

export default Other;