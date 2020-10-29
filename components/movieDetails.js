import React from "react";
import {StyleSheet, Text, TouchableHighlight, View, Image} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const MovieDetails = (props) => {
    const currMovie = props.navigation.state.params.movie;
    const numStars = Math.round(currMovie.vote_average/2);

    let formattedDesc = currMovie.overview
    let formattedTitle = currMovie.title

    if(formattedDesc.length > 250) {
      formattedDesc = formattedDesc.substring(0, 250);
      formattedDesc += '...'
    }

    if(formattedTitle.length > 11) {
      formattedTitle = formattedTitle.substring(0, 11);
      formattedTitle += '...'
    }
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
    return (
      <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                    <Text h1 style={styles.header}>{formattedTitle}</Text>
                    {currMovie.poster_path ? <Image style={{width:250, height: 350, marginTop:20}} source={{uri:`http://image.tmdb.org/t/p/w185/${currMovie.poster_path}`}}/> : null}
                    <View style={{flexDirection:'row', flexWrap:'wrap', top:20}}>
                        {rows}
                    </View>
                    <View style={{top:30}}>
                      <Text style={{fontFamily:'GeezaPro-Bold'}}>Original Language: {currMovie.original_language}</Text>
                    </View>
                    <View style={{top:40}}>
                      <Text style={{fontFamily:'GeezaPro-Bold'}}>Original Title: {currMovie.original_title}</Text>
                    </View>
                    <View style={{top:50}}>
                      <Text style={{fontFamily:'GeezaPro-Bold'}}>{formattedDesc}</Text>
                    </View>
                    <TouchableHighlight style={{top: 65}} onPress={() => props.navigation.navigate('Home')}>
                      <AntDesign name="closecircleo" size={50} color="#14A76C"/>
                    </TouchableHighlight>
              </View>
      </View> 
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    top: 10,
    margin: 20,
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
  }
});

export default MovieDetails