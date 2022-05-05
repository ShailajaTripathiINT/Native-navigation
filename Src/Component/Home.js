import React from 'react';
import { View, Text,Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Home page.....</Text>
      <Button
        title="About us"
        onPress={() => navigation.navigate('About')}
      />
     </View>
  );
}
