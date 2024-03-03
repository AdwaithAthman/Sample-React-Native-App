import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
