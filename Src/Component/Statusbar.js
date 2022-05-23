//React Native StatusBar
//https://aboutreact.com/react-native-statusbar/

//import React in our code
import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

const Statusbar = () => {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>
            StatusBar Style: {styleStatusBar}
          </Text>
          <Text style={styles.textStyle}>
            StatusBar Visibility: {!visibleStatusBar ? 'Visible' : 'Hidden'}
          </Text>
        </View>
        <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
        <View>
          <StatusBar hidden={visibleStatusBar} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Toggle StatusBar"
            onPress={() => changeVisibilityStatusBar()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Change StatusBar Style"
            onPress={() => changeStyleStatusBar()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  buttonContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default App;
