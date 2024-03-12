import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FlatCards(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.flexBox}>
        <View style={[styles.box, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '500',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  flexBox: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  box: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
});
