import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

export default function Counter(props) {

  const timerRef = useRef();
  const [timer, setTimer] = useState(0);
  const [rest, setRest] = useState(0);

  useEffect(() => {
    aux = props.restTime.split(':');
    restInSecond = parseInt(aux[0]) * 60 + parseInt(aux[1]);
    setRest(restInSecond);
    setTimer(restInSecond);
  }, [])


  const updateTime = (start) => {
    let now = new Date();
    aux = restInSecond - ((now - start) / 1000);
    if (aux >= 0) {
      setTimer(aux);
    } else {
      clearInterval(timerRef.current);
      Vibration.vibrate([200,200,200,200], true)
    }
  }

  const start = () => {
    console.log("Start");
    let start = new Date();
    timerRef.current = setInterval(() => updateTime(start), 500);
  }

  const stop = () => {
    Vibration.cancel()
    clearInterval(timerRef.current);
    setTimer(0);
    console.log("Stop");
  }

  const pause = () => {
    clearInterval(timerRef.current);
    console.log("Pause");
  }

  return (
    <View style={styles.all}>
      <Text>{rest.toFixed(0)}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}> {timer.toFixed(0)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={start}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stop}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pause}>
          <Text>Pause</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    paddingTop: 100

  },
  timeContainer: {
    width: 300,
    alignItems: 'center',
    marginBottom: 15
  },
  timeText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },

  buttonsContainer: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    justifyContent: 'space-between'
  }
})