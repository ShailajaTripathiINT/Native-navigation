import React from 'react';
import { View, Text,Button} from 'react-native';

export default function About({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This i
      <Text>Lorem Ipsum is simply dummy text of the pris about section</Text>nting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
      <Button 
        title="Contact us"
        onPress={() => navigation.navigate('Contact')}
      />
</View>
  );
}
