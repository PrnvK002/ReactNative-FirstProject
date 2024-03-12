import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView style={styles.flexBox} horizontal={true}>
        <View style={[styles.box, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
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
    marginTop: 10,
  },
  box: {
    height: 50,
    width: 100,
    borderRadius: 8,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowColor: '#CAD532',
    shadowOpacity: 1,
    shadowRadius: 0,
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
