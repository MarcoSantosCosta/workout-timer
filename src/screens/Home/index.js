import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Home() {

  const navigation = useNavigation();

  const openTimer = () => {
    navigation.navigate('Timer');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={openTimer}>
        <Text style={styles.textButton}>START</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#00B47B",
    color: "#D9D9D9",
    borderRadius: 50,
  },
  textButton : {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#D9D9D9'
  }
})