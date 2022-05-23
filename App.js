// import React from 'react';
// import {View} from 'react-native';
// import Home from './Src/Component/Home';
// import About from './Src/Component/About';
// import Contact from './Src/Component/Contact';

// { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//  <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="About" component={About} />
//     <Stack.Screen name="Contact" component={Contact} />
//   </Stack.Navigator>
// </NavigationContainer>

//   );
// };

// export default App;

// import * as React from 'react';
// import {Button, View, Text, ImageBackground} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import Statusbar from './Src/Component/Statusbar';

// const image= {uri:"https://png.pngtree.com/thumb_back/fh260/background/20210803/pngtree-watercolor-texture-indian-flag-background-image_756556.jpg"};
// const bg={uri:"https://media.istockphoto.com/photos/old-dirty-and-grunge-paper-texture-picture-id617742228?b=1&k=20&m=617742228&s=170667a&w=0&h=gvYtpOvrWIWNBuqfM7N3pIFj4JEutnSIahFMSpsDyEE="};
// const sbg = {uri:"https://us.123rf.com/450wm/cajoer/cajoer1502/cajoer150200161/37004653-beige-seamless-vintage-floral-wallpaper-pattern-vector-format-.jpg?ver=6"}

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     <Statusbar/>
//     <ImageBackground source={image} resizeMode="cover" style={{flex:1, justifyContent: "center"}}>

//     <Text style={{fontSize:"28px",color:"white"}}>
//         Destination India, a Nations Online country profile on the vast nation
//         in South and Central Asia that occupies most of the Indian subcontinent.
//         The country borders the Himalayas in the north, the Arabian Sea in the
//         west, the Bay of Bengal in the east, and the Laccadive Sea in the south.
//         India shares borders with Bangladesh, Bhutan, Myanmar (Burma), China
//         (Xizang - Tibet Autonomous Region), Nepal, and Pakistan, and it shares
//         maritime borders with Indonesia, the Maldives, Sri Lanka, and Thailand.
//         India is the second-most populous country in the world (after China),
//         with an estimated population of 1.37 billion people (in 2020). The
//         country is subdivided into 29 states and seven Union Territories. With
//         an area of 3,287,263 km², India is the 7th largest country in the world,
//         about one-third the size of the USA. Capital and largest urban area of
//         India is (New) Delhi; the second largest city is Mumbai. The official
//         languages are Hindi-Urdu and English (the Indian Constitution lists 22
//         recognized languages).
//       </Text>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//       </ImageBackground>
//     </View>
//   );
// }

// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>There are no notification yet</Text>
//       <Button onPress={() => navigation.navigate('About')} title="Go About" />
//     </View>
//   );
// }
// function About({navigation}) {
//   return (

//     <View style={{flex: 1, }}>
//     <ImageBackground source={bg} resizeMode="cover">
   
//       <Text  style={{color:"blue", margin:"5%"}}>Incredible India</Text>
//       <Text>
//         India is one of the oldest civilizations in the world with a
//         kaleidoscopic variety and rich cultural heritage. It has achieved
//         all-round socio-economic progress during the last 65 years of its
//         Independence. India has become self-sufficient in agricultural
//         production and is now one of the top industrialized countries in the
//         world and one of the few nations to have gone into outer space to
//         conquer nature for the benefit of the people. It covers an area of 32,
//         87,263 sq. km, extending from the snow-covered Himalayan heights to the
//         tropical rain forests of the south. As the 7th largest country in the
//         world, India stands apart from the rest of Asia, marked off as it is by
//         mountains and the sea, which give the country a distinct geographical
//         entity. Bounded by the Great Himalayas in the north, it stretches
//         southwards and at the Tropic of Cancer, tapers off into the Indian Ocean
//         between the Bay of Bengal on the east and the Arabian Sea on the west.
//         As you travel, India offers a range of vast tourism choices, diverse in
//         land and nature, people, tribes, cuisine, faiths, dance forms, music,
//         arts, crafts, adventure, sport, spirituality, history; even these vary
//         as you journey from one state to another. As a country, India has
//         achieved all-round socio-economic progress in the last 70 years of
//         independence. The change is clearly visible in the Tier I and Tier II
//         cities. However, the fascinating aspect lies in the stark difference as
//         you travel through the new and old parts of its cities. From world-class
//         airports and hotels, luxurious shopping malls, restaurants, pubs and
//         cafes to overcrowded streets and alleyways, in the same cities, filled
//         with thousands of little shops offering every possible modern and ethnic
//         product and native street food is a fascinating experience.
//       </Text>
//       <Button
//         onPress={() => navigation.navigate('States')}
//         title="View States"
//       />
  
   
//        </ImageBackground>
//     </View>
//   );
// }
// function States({navigation}) {
//   return (
//     <View style={{flex: 1}}>
//     <ImageBackground source={sbg} >
//       <Text style={{margin:"5%"}}>These are total 29 States in India</Text>
//       <Text></Text>
//       <Text> Andhra Pradesh(Amaravati)</Text>
//       <Text> Arunachal Pradesh(Itanagar)</Text>
//       <Text> Assam(Dispur)</Text>
//       <Text>Bihar(Patna)</Text>
//       <Text>Chhattisgarh(Raipur)</Text>
//       <Text>Goa(Panaji)</Text>
//       <Text>Gujarat(Gandhinagar)</Text>
//       <Text>Haryana</Text>
//       <Text>Himachal Pradesh</Text>
//       <Text>Jharkhand</Text>
//       <Text>Karnataka</Text>
//       <Text>Kerala</Text>
//       <Text>Madhya Pradesh</Text>
//       <Text>Maharashtra</Text>
//       <Text>Manipur</Text>
//       <Text>Meghalaya</Text>
//       <Text>Mizoram</Text>
//       <Text>Nagaland</Text>
//       <Text>Odisha </Text>
//       <Text>Punjab</Text>
//       <Text>Rajasthan</Text>
//       <Text>Sikkim</Text>
//       <Text>Tamil Nadu</Text>
//       <Text>Telangana</Text>
//       <Text>Tripura</Text>
//       <Text>Uttar Pradesh</Text>
//       <Text>Uttarakhand</Text>
//       <Text>West Bengal</Text>
// <Text></Text>
// <Text></Text>
// <Text></Text>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </ImageBackground>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// const App=()=> {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="About" component={About} />
//         <Drawer.Screen name="States" component={States} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;



import React from 'react';
import { View } from 'react-native';
import Sqlite from './Src/Component/Sqlite'
export default function App() {
  return (
    <View>
      <Sqlite/>
     </View>
  );
}
