import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import { Container } from './styles';

const Ligar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="power" size={200} />
      <Text>Ligar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ligar;
