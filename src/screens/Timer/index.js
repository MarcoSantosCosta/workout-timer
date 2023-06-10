import { Text, View, TextInput, StyleSheet } from 'react-native';

import Counter from '../../components/counter';
import TimePicker from '../../components/timePicker';
import { useState } from 'react';

export default function Timer() {


  const [rest, setRest] = useState('120')

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setRest}
          value={rest}
          placeholder="Ex 120s"
          keyboardType="numeric"
        />
      </View>
      <Counter restTime={rest} />
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  }
});