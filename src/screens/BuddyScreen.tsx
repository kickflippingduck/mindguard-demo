import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function BuddyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buddy</Text>
      <Text>Manage your accountability partner.</Text>
      <Button title="Invite Buddy" onPress={() => {}} />
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
