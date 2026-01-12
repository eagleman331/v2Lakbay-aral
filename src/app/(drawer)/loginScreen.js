import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../assets/constant/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from '@react-native-firebase/auth';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const loginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const animation = useRef(null);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
 

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

 

  const falseSignIn = () => {
    if (username === 'warren35@gmail.com' && password === '123456') {
      router.replace('/(drawer)/(tabs)/(tour)/TouristHomeScreen');
    } else {
      console.log('Invalid credentials');
    }
  };
   // function handleAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }
  // useEffect(() => {
  //   const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
  //   console.log('Current user:', user);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  // const SignInEmail = () => {
  //   signInWithEmailAndPassword(auth, username, password)
  //     .then((userCredential) => {
  //       console.log('User signed in!');
  //       const user = userCredential.user;
  //       router.replace('/(drawer)/(tabs)/(rotc)/RotcSchoolScreen');
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  // const handleLogin = async (email, password) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, 'warren35@gmail.com', '123456');
  //     console.log('logging in:');
  //   } catch (error) {
  //     console.log('Error logging in:', error.message);
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
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Username"
              placeholderTextColor="#d0d0d0"
              autoCapitalize="none"
              // Platform specific hints for autofill (highly recommended for UX)
              textContentType="username" // iOS
              autoComplete="username" // Android
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
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              placeholderTextColor="#d0d0d0"
              autoCapitalize="none"
              // Platform specific hints for autofill (highly recommended for UX)
              textContentType="username" // iOS
              autoComplete="username" // Android
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              falseSignIn();
              // signInWithEmailAndPassword(auth, username, password)
              //   .then((userCredential) => {
              //     // Signed in
              //     console.log('User signed in!');
              //     const user = userCredential.user;
              //     router.replace('/(drawer)/(tabs)/(rotc)/RotcSchoolScreen');
              //     // ...
              //   })
              //   .catch((error) => {
              //     const errorCode = error.code;
              //     const errorMessage = error.message;
              //   });

              // createUserWithEmailAndPassword(auth, username, password)
              //   .then(() => {
              //     console.log('User account created & signed in!');
              //   })
              //   .catch((error) => {
              //     if (error.code === 'auth/email-already-in-use') {
              //       console.log('That email address is already in use!');
              //     }

              //     if (error.code === 'auth/invalid-email') {
              //       console.log('That email address is invalid!');
              //     }

              //     console.error(error);
              //   });
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
              <Text>Login</Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={{ color: 'white', alignSelf: 'center', padding: 20 }}>Or</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              router.replace('/(drawer)/(tabs)/(tour)/TouristHomeScreen');
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
