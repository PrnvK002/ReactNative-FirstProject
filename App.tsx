import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import TrendingPlace from './components/TrendingPlace';
import Blogcard from './components/Blogcard';
import ContactsList from './components/ContactsList';
// import AnimatedButton from './components/AnimatedButton';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <TrendingPlace />
          <Blogcard />
          <ContactsList />
          {/* <AnimatedButton /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
