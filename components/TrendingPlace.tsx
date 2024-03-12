import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TrendingPlace() {
  let imageUrl: string =
    'https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg';
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Place</Text>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri: imageUrl}} />
        <View style={styles.cardBody}>
          <Text style={styles.cardHeader}>Golden Gate</Text>
          <Text style={styles.bodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <Text style={styles.link}>Read more</Text>
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
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 10,
  },
  bodyText: {
    color: 'black',
    fontSize: 14,
  },
  cardHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  link: {
    color: '#7596eb',
    fontWeight: '800',
    marginTop: 8,
  },
});
