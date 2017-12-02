import { TextInput, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { Colors } from '../../theme/index';

const styles = StyleSheet.create({
  input: {
    height: 26,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingLeft: 6,
    color: Colors.lightGray,
    margin: 10,
    fontSize: 12,
  },
  searchArea: {
    margin: 6,
    backgroundColor: Colors.white,
  },
});
export default () =>
  (<View style={styles.searchArea}>
    <TextInput
      style={styles.input}
      placeholder={'开始搜索吧...'}
    />
  </View>);
