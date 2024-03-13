import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

export default function AnimatedButton() {
  return (
    <Pressable
      onPress={() => console.log('animated butn click!')}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: pressed ? 'red' : 'yellow',
        },
        styles.button,
      ]}>
      <Text>Press me!</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 150,
    borderRadius: 10,
    color: 'white',
  },
});
