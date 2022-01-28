import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
const Score = ({navigation, setUpdate}) => {



  const dispatch = useDispatch()
  const score = useSelector(state => state.score);
  return (
    <View
      style={{
        backgroundColor: '#073b4c',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
        Final Score
      </Text>
      <Text style={{fontSize: 80, fontWeight: 'bold', color: '#ff9e00'}}>
        {score}/10
      </Text>
      <TouchableOpacity
      onPress={() => {
        dispatch({ type : 'RESET_SCORE' })
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
      <TouchableOpacity
      onPress={() => {
        dispatch({ type : 'RESET_SCORE' })
        navigation.navigate('home')
        setUpdate(prev => prev === false ? true : false)
      }}
        style={{
          width: 90,
          height: 40,
          backgroundColor: '#06d6a0',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop : 25
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Finish
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Score;
