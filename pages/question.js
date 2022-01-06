import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Vibration,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Sound from 'react-native-sound';
import {useSelector, useDispatch} from 'react-redux'
const Question = ({question, index, navigation, setUpdate}) => {

  const score = useSelector(state => state.score)
  const dispatch = useDispatch()
  const [answer, setAnswer] = useState('');
  const [isAnswer, setIsAnswer] = useState(false);
  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const getMultipleAnswer = () => {
    let array = [question.correct_answer, ...question.incorrect_answers];
    array = shuffle(array);
    setAnswer(array);
  };

  useEffect(() => {
    getMultipleAnswer();
  }, []);

  const setColor = item => {
    if (isAnswer) {
      if (item === question.correct_answer) {
        return '#06d6a0';
      } else {
        return '#f94144';
      }
    } else {
      return '#06d6a0';
    }
  };

  const setNotification = item => {
    if(!isAnswer){

      if (item === question.correct_answer) {
        var sound = new Sound('true_sound.mp3', Sound.MAIN_BUNDLE, error => {
        
          sound.play(() => sound.release());
        });
        sound.play(success => {
        
        });

        dispatch({ type : 'ADD_SCORE' })
        
      } else {
        var sound = new Sound('false_sound.mp3', Sound.MAIN_BUNDLE, error => {
         
          sound.play(() => sound.release());
        });
        sound.play(success => {
        
        });
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#073b4c',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        position: 'relative',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'flex-start',
          marginTop: 10,
        }}>
        Question :
      </Text>
      <Text
        style={{
          color: '#ff9e00',
          fontWeight: 'bold',
          fontSize: 30,
          alignSelf: 'flex-start',
          marginTop: 10,
        }}>
        {question.question}
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'flex-start',
          marginTop: 10,
        }}>
        Answer :{' '}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 10}}>
        {answer
          ? answer.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  setIsAnswer(true);
                  setNotification(item);
                }}
                key={index}
                style={{
                  width: 250,
                  height: 50,
                  backgroundColor: setColor(item),
                  marginTop: 30,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                <Text
                  style={{color: '#073b4c', fontSize: 20, fontWeight: 'bold'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>

      {isAnswer && (
        <TouchableOpacity
          onPress={() => {
            if (index < 9) {
              navigation.navigate(`question${index + 1}`);
            } else {
              navigation.navigate('score')
            }
          }}
          style={{
            width: 90,
            height: 40,
            backgroundColor: '#00b4d8',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Next
          </Text>
        </TouchableOpacity>
      )}
       <TouchableOpacity
       onPress={() => {
         navigation.navigate('home')
         setUpdate(prev => prev === false ? true : false)
       }}
        style={{
          padding: 10,
          backgroundColor: '#00b4d8',
          borderRadius: 20,
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
        <Icon name="home" type="octicon" color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Question;
