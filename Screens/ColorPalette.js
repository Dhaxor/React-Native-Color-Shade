import React from 'react';
import {
  SafeAreaView,
  Platform,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Color from '../components/Color';

const ColorPalette = ({ route }) => {
  const { palatteName, colors } = route.params;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <Color name={item.colorName} bgcolor={item.hexCode} />
        )}
        ListHeaderComponent={<Text>{palatteName}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  myText: {
    fontSize: 20,
  },
});

export default ColorPalette;
