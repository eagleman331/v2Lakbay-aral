import { View, Text, Image, TouchableOpacity, Button, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FaqsData } from '@/src/assets/DataApp/FaqsData';
// import { collection, query, where, getDocs, getFirestore } from '@react-native-firebase/firestore';

import FaqsList from '@/src/components/Marques/FaqsList';
import Colors from '@/src/assets/constant/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const MainFaqScreen = () => {
  // const [faqsData, setFaqsData] = useState([]);
  const { width, height } = useWindowDimensions();

  // const pressFirebase = async () => {
  //   const combinedQuestions = [];
  //   const db = getFirestore();
  //   const q = query(collection(db, 'faqs'));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     const questions = doc.data().listOfQuestion;
  //     if (Array.isArray(questions)) {
  //       combinedQuestions.push(...questions);
  //     }
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  //   setFaqsData(combinedQuestions);
  // };

  // useEffect(() => {
  //   const unsubscribed = async () => {
  //   const combinedQuestions = [];
  //   const db = getFirestore();
  //   const q = query(collection(db, 'faqs'));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     const questions = doc.data().listOfQuestion;
  //     if (Array.isArray(questions)) {
  //       combinedQuestions.push(...questions);
  //     }
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  //   setFaqsData(combinedQuestions);
  // }
  // unsubscribed()
  // console.log('FAQ DATA:', faqsData);
  //   console.log('No data');
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.darkGreen }}>
      {/* <Image
        className="absolute left-0 top-0 h-full w-full"
        source={require('../../../../assets/Background/RopeCourse.png')}
      /> */}
      <SafeAreaView>
        <View className="ml-5 mt-24">
          <Text className="text-4xl font-bold text-neutral-50">FAQs</Text>
        </View>
        <View className="h-6" />
        <View
          style={{
            marginLeft: 10,
            height: 1.3,
            backgroundColor: Colors.white,
            width: width * 0.7,
            alignSelf: 'baseline',
          }}
        />
        <View className="items-center">
          {FaqsData.map((item, index) => {
            return <FaqsList item={item} key={index} />;
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainFaqScreen;
