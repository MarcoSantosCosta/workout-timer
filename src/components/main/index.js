import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from '../counter';
import { useState } from 'react';


export default function Main() {
  const [restTime, setRestTime] = useState()

  return (
    <View>
      <Counter restTime="00:02" />
    </View>
  );
}
