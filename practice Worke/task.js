import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
function incrmrnt(){
  setCount(function (prevCount) {
    return (prevCount += 1);
  });
}
function decrement() {
  setCount(function (prevCount) {
    if (prevCount > 0) {
      return (prevCount -= 1); 
    } else {
      return (prevCount = 0);
    }
  });
}
  return (
    <View style={styles.container}>
     
      <button onClick={incrmrnt}  >Increment</button> <br></br>
       <h1>{count}</h1> <br></br>
       <button onClick={decrement}>Decrement</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});