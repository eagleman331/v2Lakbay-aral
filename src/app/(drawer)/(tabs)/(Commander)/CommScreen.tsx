import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  useWindowDimensions,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { router } from 'expo-router';

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Colors from '@/src/assets/constant/Colors';

const CommScreen = () => {
  const [faqsData, setFaqsData] = useState([]);
  const { width, height } = useWindowDimensions();
  const [storageData, setStorageData] = useState(null);
  const [score, setScore] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      <SafeAreaView>
        <View className="h-16" />

        <View className="items-center"
style={{justifyContent: 'center'}}
        >
          <ImageBackground
        resizeMode="stretch"
       style={{width: width*.95, height: height*.8}}
        source={
          require('@/src/assets/Commander/MGEN_Alcudia.jpeg')
        }>
        <TouchableOpacity
          className=" w-80 bg-white p-4"
          style={{
            marginHorizontal: '25%',
            marginTop: height * 0.7,
            opacity: '70%',
            alignSelf: 'center',
            borderRadius: 5,
          }}
          //to be change later test
        >
          <Text style={{ fontSize: 14, fontFamily: 'roboto-medium', alignSelf: 'center' }}>
            MGEN RONALD JESS S ALCUDIA
          </Text>

          <Text style={{ fontSize: 12, fontFamily: 'mrt-bold-medium', alignSelf: 'center' }}>
           Commander Reserve Command, PA
          </Text>
        </TouchableOpacity>
      </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CommScreen;


// const { width, height } = Dimensions.get('window');
// const CommScreen = ({ navigation }) => {
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);
//   return (
//     <View className="flex-1">
//       <ImageBackground
//         resizeMode="stretch"
//         className="flex-1"
//         source={
//           require('@/src/assets/Commander/MGEN_Alcudia.jpeg')
//         }>
//         <TouchableOpacity
//           className=" w-80 bg-white p-4"
//           style={{
//             marginHorizontal: '25%',
//             marginTop: height * 0.8,
//             opacity: '70%',
//             alignSelf: 'center',
//             borderRadius: 5,
//           }}
//           //to be change later test
//         >
//           <Text style={{ fontSize: 14, fontFamily: 'roboto-medium', alignSelf: 'center' }}>
//             FERDINAND ROMUALDEZ MARCOS JR.
//           </Text>

//           <Text style={{ fontSize: 12, fontFamily: 'mrt-bold-medium', alignSelf: 'center' }}>
//             The President Of The Philippines
//           </Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// };

// export default CommScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
