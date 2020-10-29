import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Buttons = (props) => {
    return(
        <View style={styles.icons}>
            <View style={styles.CircleShapeViewL}>
                <TouchableHighlight onPress={() => props.dislike()}>
                    <FontAwesome5 name="thumbs-down" size={50} color="#ff4040" />
                </TouchableHighlight>
            </View>
            <View style={styles.CircleShapeViewM}>
                <TouchableHighlight onPress={() => props.toLikedMovies()}>
                    <FontAwesome5 name="list-ul" size={40} color="black" />
                </TouchableHighlight>
            </View>
            <View style={styles.CircleShapeViewR}>
                <TouchableHighlight onPress={() => props.like()}>
                    <FontAwesome5 name="thumbs-up" size={50} color="#14A76C" />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = {
    icons: {
      flexDirection:'row', 
      flexWrap:'wrap',
      bottom: 100,
      justifyContent: 'center'
    },
    CircleShapeViewL: {
        width: 90,
        height: 90,
        borderRadius: 90/2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    CircleShapeViewR: {
        width: 90,
        height: 90,
        borderRadius: 90/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    CircleShapeViewM: {
        width: 90,
        height: 90,
        borderRadius: 90/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
  }

export default Buttons