import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const TabBottom = ({ navigation, state }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign
          name="home"
          size={25}
          onPress={() => navigation.navigate('Home')}
          color={state.index === 0 ? '#7159c1' : 'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ligar')}>
        <Feather
          color={state.index === 1 ? '#7159c1' : 'black'}
          name="power"
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Feather
          name="settings"
          size={25}
          color={state.index === 2 ? '#7159c1' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
});

export default TabBottom;
