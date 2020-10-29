import React from "react";
import {StyleSheet, Text, TouchableHighlight, View, ScrollView, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const LikedMovies = (props) => {
  let formattedQueue = [];

  for(let i = 0; i < props.navigation.state.params.queue.length; i++) {
    let formattedObj = {};
    Object.entries(props.navigation.state.params.queue[i]).map(x => {
      if(x[0] === 'title') {
        let formattedTitle = x[1];
        if(formattedTitle.length > 11) {
          formattedTitle = formattedTitle.substring(0, 11);
          formattedTitle += '...';
        }
        formattedObj[x[0]] = formattedTitle
      } else if(x[0] === 'overview') {
        let formattedDesc = x[1];
        if(formattedDesc.length > 250) {
          formattedDesc = formattedDesc.substring(0, 250);
          formattedDesc += '...';
        }
        formattedObj[x[0]] = formattedDesc;
      } else {
        formattedObj[x[0]] = x[1];
      }
    });
    formattedQueue.push(formattedObj);
  }

  return (
    <ScrollView>
      {formattedQueue.map((x) => {
        return <View key={x.poster_path} style={styles.border}>
                    <Text h1 style={styles.header}>{x.title}</Text>
                    <Image style={{width:250, height: 300, marginTop:20}} source={{uri:`http://image.tmdb.org/t/p/w185/${x.poster_path}`}}/>
                    <TouchableHighlight onPress={() => props.navigation.navigate('Details', {movie: x})}>
                        <View style={{top:20}}>
                            <MaterialIcons name="details" size={24} color="#14A76C" />
                        </View>
                    </TouchableHighlight>
                </View>
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default LikedMovies;