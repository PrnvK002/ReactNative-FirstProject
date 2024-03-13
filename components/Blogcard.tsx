import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function Blogcard() {
  const imageUrl: string =
    'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={styles.card}>
        <Text style={styles.cardHeader}>
          What's new in Javascript 21 - ES12
        </Text>
        <Image style={styles.cardImage} source={{uri: imageUrl}} />
        <View style={styles.cardFooter}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() =>
              Linking.openURL(
                'https://www.syncfusion.com/blogs/post/top-6-javascript-es12-features-you-should-use.aspx',
              )
            }>
            <Text style={styles.link}>Read more</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Text style={styles.link}>Follow me</Text>
          </TouchableOpacity>
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
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 7,
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
  },
  link: {
    color: '#7596eb',
    fontWeight: '800',
    marginTop: 8,
  },
});
