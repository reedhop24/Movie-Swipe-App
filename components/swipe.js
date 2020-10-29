import React, {useState, useEffect} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Buttons from './swipe-components/buttons';
import axios from 'axios';
import Card from './swipe-components/card'
 
function Swipe({navigation}) {

  const [gesture, setGestureName] = useState('None');
  const [likedMovies, setLikedMovies] = useState([]);
  const [totalList, setTotalList] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    axios.get('http://172.16.32.157:500/movieInfo')
    .then((res) => {
      let empty = [];
      res.data.map((x) => x.length > 0 ? empty.push(x) : null);
      setTotalList(empty);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  function onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureName(gestureName);
    if(gestureName === SWIPE_LEFT) {
      newCard();
    } else if(gestureName === SWIPE_RIGHT) {
      addLiked();
    }
  }

  const newCard = () => {
    let i = index;
    i++
    setIndex(i);
  }

  const addLiked = () => {
    let newLiked = [...likedMovies, totalList[index][0]];
    setLikedMovies(newLiked);
    newCard();
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        config={config}
        style={{
          flex: 2,
        }}
        >
          {totalList[index] && totalList[index].length > 0 ? <Card movie={totalList[index][0]} showModal={() => navigation.navigate('Details', {movie: totalList[index][0]})}/> : null}
          <Buttons dislike={() => newCard()} like={() => addLiked()} toLikedMovies={() => navigation.navigate('LikedMovies', {queue: likedMovies})}/>
      </GestureRecognizer>
  );
}
 
export default Swipe;