import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.black}>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="点我！" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    color: 'black',
  },
});

export default Home;
