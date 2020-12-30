import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Color = ({ name, bgcolor }) => {
  const thestyle = {
    backgroundColor: bgcolor,
  };
  return (
    <View>
      <Text style={[styles.box, thestyle]}>
        {name}: {bgcolor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    marginBottom: 10,
  },
});
export default Color;
