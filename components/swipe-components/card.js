import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

const Card = (props) => {
    let formattedTitle = props.movie.title;
    let formattedDesc = props.movie.overview;

    if(formattedTitle.length > 13) {
        formattedTitle = formattedTitle.substring(0, 11);
        formattedTitle += '...'
    }

    if(formattedDesc.length > 250) {
        formattedDesc = formattedDesc.substring(0, 250);
        formattedDesc += '...'
    }

    const numStars = Math.round(props.movie.vote_average/2);
    let rows = [];

    for(let i = 0; i < 5; i++) {
        if(i < numStars) {
            rows.push(<View key={i} style={{backgroundColor:'#FFE400', padding: 5, borderRadius:3, marginLeft:2}}>
                            <FontAwesome name="star" size={24} color="white"/>
                    </View>)
        } else {
            rows.push(<View key={i} style={{backgroundColor:'grey', padding: 5, borderRadius:3, marginLeft:2}}>
                            <FontAwesome name="star" size={24} color="white"/>
                    </View>)
        }
    }

    return(
        <View style={style.container}>
            <View style={style.border}>
                <Text h1 style={style.header}>{formattedTitle}</Text>
                <Image style={{width:250, height: 300, marginTop:20}} source={{uri:`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}}/>
                <View style={{flexDirection:'row', flexWrap:'wrap', top:20}}>
                    {rows}
                </View>
                <TouchableHighlight onPress={() => props.showModal()}>
                    <View style={{top:45}}>
                        <MaterialIcons name="details" size={24} color="#14A76C" />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const style = {
    container: {
        flex: 4,
        justifyContent: "space-between",
        padding: 5,
        top: 10,
        margin: 10
    },
    border: {
        margin: 20,
        flex:.8,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    header: {
        fontSize: 30,
        top: 8,
        fontFamily: 'Verdana-Bold'
    },
    description: {
        fontSize: 15,
        padding: 15,
        textAlign: 'center'
    }
}

export default Card;