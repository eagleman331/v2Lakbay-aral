import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/src/assets/constant/Colors';

const CommScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      <SafeAreaView>
        <View className="h-16" />

        <View className="items-center" style={{ justifyContent: 'center' }}>
          <ImageBackground
            resizeMode="stretch"
            style={{ width: width * 0.95, height: height * 0.8 }}
            source={require('@/src/assets/Commander/MGEN_Alcudia.jpeg')}>
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
