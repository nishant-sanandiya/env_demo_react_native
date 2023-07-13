import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {envName} from './src/constants';

const App = () => {
  console.log('envName :- ', envName);
  return (
    <SafeAreaView>
      <Text>envName :- {envName}</Text>
    </SafeAreaView>
  );
};

export default App;
