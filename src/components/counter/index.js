import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

export default function Counter(props) {

  const timerRef = useRef();
  const [rest, setRest] = useState();
  const [timer, setTimer] = useState();
  const [status, setStatus] = useState();


  useEffect(() => {
    console.log(props);
    setRest(props.restTime);
    setTimer(props.restTime);
  }, [props.restTime]);

  const secondsToString = (timeInSeconds) => {
    let minutes = Math.floor((timeInSeconds / 60));
    console.log('Total Time:' + timeInSeconds);
    console.log("Minutes: "+minutes);
    let seconds = (timeInSeconds - (minutes * 60));
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

  };

  const updateTime = (start) => {
    let now = new Date();
    aux = Math.ceil(rest - ((now - start) / 1000));
    if (aux >= 0) {
      setTimer(aux);
    } else {
      setStatus('inTraining')
      clearInterval(timerRef.current);
      Vibration.vibrate([200, 200, 200, 200], true)
      setTimeout(() => Vibration.cancel(), 7000)
    }
  };

  const start = () => {
    setStatus('inRest')
    setTimer(rest)
    let start = new Date();
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => updateTime(start), 500);
  };

  const stop = () => {
    Vibration.cancel()
    setStatus('inTraining')
    clearInterval(timerRef.current);
    setTimer(rest);
    console.log("Stop");
  };

  return (
    <View style={styles.all}>

      <Text>{status}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}> {secondsToString(timer)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={start}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stop}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    width: "100%",
    backgroundColor: "red"
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  timeText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'space-around'
  }
})