import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

const Separator = () => {
    const { width, height } = useWindowDimensions();
  return (
    <View
            style={{
              height: 1.3,
              backgroundColor: 'white',
              width: width * 0.7,
              left: width * 0.05,
            }}
          />
  );
};

export default Separator;
