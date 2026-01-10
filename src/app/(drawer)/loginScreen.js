import { View, Text, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import Colors from '../../assets/constant/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

const loginScreen = () => {
  const [text, onChangeText] = useState('Password');
  const [userName, onChangeNumber] = useState('UserName');
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const animation = useRef(null);
  //   const auth = getAuth();
  //   const SignInEmail = () => {

  //     signInWithEmailAndPassword(auth, 'warren@gmail.com', 'password')
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //       });
  //   };

  //   const handleLogin = async (email, password) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, 'warren@gmail.com', 'password');
  //     console.log("User logged in!");
  //   } catch (error) {
  //     console.error("Error logging in:", error.message);
  //   }
  // };

  return (
    <SafeAreaView className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
      <View>
        <View className=" ml-5 mt-5 flex-row" style={{ height: height * 0.05 }}>
          <Text className="text-4xl font-bold text-neutral-50">Lakbay Aral</Text>
          <Text className="align-bottom text-2xl  text-neutral-50"> -Checkpoint</Text>
        </View>
      </View>
      <View>
        <View style={{ alignItems: 'center' }}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
            }}
            source={require('../../assets/lottie/ChildrenRunning.json')}
          />
        </View>
        <View
          style={
            {
              // top: height * 0.3,
            }
          }>
          <View>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: 'white',
                borderColor: Colors.turbo,
                width: width * 0.7,
                alignSelf: 'center',
              }}
              onChangeText={onChangeNumber}
              value={text}
              onPressIn={() => onChangeNumber('')}
            />
          </View>

          <View>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: 'white',
                borderColor: Colors.turbo,
                width: width * 0.7,
                alignSelf: 'center',
              }}
              onChangeText={onChangeText}
              value={text}
              onPressIn={() => onChangeText('')}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.turbo,
              height: 50,
              width: width * 0.8,
              marginLeft: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text>Login</Text>
          </View>

          <View>
            <Text style={{ color: 'white', alignSelf: 'center', padding: 20 }}>Or</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push('/(drawer)/(tabs)/(tour)/TouristHomeScreen');
            }}>
            <View
              style={{
                backgroundColor: Colors.turbo,
                height: 50,
                width: width * 0.8,
                marginLeft: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text>Login as Visitor</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default loginScreen;
