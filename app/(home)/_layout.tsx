import { useBackgroundColor } from '@/contexts/BackgroundColorProvider';
import { useRandomColor } from '@/hooks/useRandomColor';
import React from 'react';

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function TabLayout() {
  const {backgroundColor, setBackgroundColor} = useBackgroundColor();
  const randomColor = useRandomColor();

  const onPageClick = () => {
    setBackgroundColor(randomColor)
   }

  return (
    <TouchableOpacity onPress={onPageClick} style={styles.container}>

    <View style={[styles.container, {backgroundColor}]}>
      <Text>Hello there!</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center"
  }
})
