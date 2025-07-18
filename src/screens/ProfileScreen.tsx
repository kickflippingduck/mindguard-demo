import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Props {
  onLogout: () => void;
}

export default function ProfileScreen({ onLogout }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Your account details.</Text>
      <Button title="Logout" onPress={onLogout} />
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
