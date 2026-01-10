import { Drawer } from 'expo-router/drawer';
import { Link, router } from 'expo-router';

import { HeaderButton } from '@/src/components/HeaderButton';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { Divider } from '@rneui/themed';
import Colors from '@/src/assets/constant/Colors';

const CustomDrawerContent = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: Colors.goldYellow, flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Image
          source={require('../../assets/ChildTour.png')}
          style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 20 }}
        />
        <Text style={{ alignSelf: 'center', fontSize: 18, paddingTop: 10, color: 'black' }}>
          Lakbay Aral CY-2026
        </Text>
      </View>

      <View style={{ paddingTop: 10 }}>
        {/* <Divider inset={true} insetType="right" width={1} color="black" style={{ marginTop: 10 }} /> */}
        <View
          style={{
            height: 0.5,
            backgroundColor: 'black',

            alignSelf: 'left',
          }}
        />
        <TouchableOpacity
          className="flex-row"
          style={{ paddingLeft: 15, marginTop: 15 }}
          onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(rotc)/RotcSchoolScreen' })}
        >
          <AntDesign name="home" size={24} color={Colors.darkGreen} />

          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Home</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 0.5,
            backgroundColor: 'black',
            marginTop: 10,
            alignSelf: 'left',
          }}
        />
        <TouchableOpacity
          className="flex-row"
          style={{ paddingLeft: 15, marginTop: 15 }}
          onPress={() => router.push({ pathname: '/(drawer)/(tabs)/(Commander)/CommScreen' })}
        >
          <FontAwesome6 name="person-military-rifle" size={24} color={Colors.darkGreen} />
          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Commander</Text>
        </TouchableOpacity>
        {/* <Divider inset={true} insetType="right" width={1} color="black" style={{ marginTop: 10 }} /> */}
        <View
          style={{
            height: 0.5,
            backgroundColor: 'black',
            marginTop: 10,
            alignSelf: 'left',
          }}
        />

        {/* <TouchableOpacity
          className="flex-row"
          style={{ paddingLeft: 15, marginTop: 15 }}
          // onPress={() => router.push({ pathname: '/(drawer)/paywallScreen' })}
        >
          <AntDesign name="code" size={24} ccolor={Colors.darkGreen} />
          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Developer</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 0.5,
            backgroundColor: 'black',
            marginTop: 10,
            alignSelf: 'left',
          }}
        />

        <TouchableOpacity
          className="flex-row"
          style={{ paddingLeft: 15, marginTop: 15 }}
          // onPress={() => router.push({ pathname: '/(drawer)/paywallScreen' })}
        >
          <Feather name="coffee" size={24} color={Colors.darkGreen} />
          <Text style={{ paddingLeft: 10, alignSelf: 'center' }}>Give a Coffee</Text>
        </TouchableOpacity> */}
        {/*         
        <DrawerItemList {...props} />
        <DrawerItem label={'warren'} /> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={CustomDrawerContent}>

       <Drawer.Screen
        name="loginScreen"
        options={{
          headerTitle: 'Login',
          headerShown: false,
          drawerLabel: 'Login',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
            <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
