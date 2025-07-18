import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text>Quick access to coping tools.</Text>
      <Button title="Start Meditation" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
