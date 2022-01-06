import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';
import axios from 'axios';
import Question from './question';
import { Text, View } from 'react-native';
import Score from './score';
const Route = () => {
  const [questions, setQuestions] = useState('');
  const [update , setUpdate] = useState(false)
  const getQuestion = async () => {
    let data = await axios.post(
      'https://opentdb.com/api.php?amount=10&type=multiple',
    );
    setQuestions(data.data.results);
  };

  useEffect(() => {
    getQuestion();
    
  }, [update]);
  const Stack = createNativeStackNavigator();

  if(questions){
    return (

    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="score" >
      {
        props => <Score {...props} setUpdate={setUpdate}/>
      }
    </Stack.Screen>
      {
          questions ? questions.map((question, index) => (
              <Stack.Screen name={`question${index}`} key={index}>
                  {
                      props => <Question  {...props} question={question} index={index} setUpdate={setUpdate}/>
                  }
              </Stack.Screen>
          )) : null
      }
  </Stack.Navigator>
    )
  } else {
    return (
      <View style={{flex : 1, display : 'flex', alignItems  : 'center', justifyContent : 'center', backgroundColor : '#073b4c'}}>
        <Text style={{color : 'white', fontWeight :'bold', fontSize : 50}}>Loading</Text>
      </View>
    )
  }
};

export default Route;
