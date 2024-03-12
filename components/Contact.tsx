import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type contactprop = {
  imageUrl: string;
  name: string;
  description: string;
};

export default function Contact({imageUrl, name, description}: contactprop) {
  return (
    <View style={styles.container}>
      <Image style={styles.contactImage} source={{uri: imageUrl}} />
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.contactName}>{name}</Text>
        <Text style={styles.contactDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1c163b',
  },
  contactDescription: {
    color: '#6f6d78',
    fontWeight: '600',
  },
});
