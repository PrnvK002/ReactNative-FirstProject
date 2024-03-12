import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Contact from './Contact';

const contactData = [
  {
    imageUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Natasha',
    description: 'Coder may die but code never dies',
    id: '1',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Joefry',
    description: 'Love and live on coding',
    id: '2',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Mark',
    description: 'Coder may die but code never dies',
    id: '3',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Jimmy',
    description: 'Coder may die but code never dies',
    id: '4',
  },
];

export default function ContactsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts</Text>
      {contactData.map(data => {
        return (
          <Contact
            name={data.name}
            imageUrl={data.imageUrl}
            description={data.description}
            key={data.id}
          />
        );
      })}
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
    marginBottom: 20
  },
});
