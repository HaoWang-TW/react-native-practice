import React from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { FontSize, Colors } from '../theme';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    paddingBottom: 6,
    backgroundColor: 'white',
    margin: 6,
  },
  header: {
    marginBottom: 8,
    flex: 1,
    flexDirection: 'row',
  },
  avator: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  author: {
    color: Colors.author,
  },
  time: {
    fontSize: FontSize.smaller,
    lineHeight: 22,
    color: Colors.lightGray,
  },
  content: {
    lineHeight: 18,
    color: Colors.normal,
  },
  operations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    marginTop: 6,
  },
  operationItem: {
    flexDirection: 'row',
  },
  operationIcon: {
    width: 16,
    height: 16,
    marginRight: 3,
    marginTop: 3,
  },
  operationText: {
    color: Colors.lightGray,
    fontSize: FontSize.small,
    lineHeight: 22,
  },
  dropDown: {
    alignSelf: 'flex-start',
  },
  dropDownIcon: {
    width: 16,
    height: 16,
  },
});
export default () => (<View style={styles.item}>
  <View style={styles.header}>
    <Image
      style={styles.avator}
      source={require('../assets/images/avator.png')}
    />
    <View style={{ flexGrow: 1 }}>
      <Text style={styles.author}>我就是浩神</Text>
      <Text style={styles.time}>2017-12-23</Text>
    </View>
    <View />
    <View style={styles.dropDown} >
      <Image style={styles.dropDownIcon} source={require('../assets/images/dropDown.png')} />
    </View>
  </View>
  <Text
    style={styles.content}
  >RN的0.43版终于出来了，现在大家期待已久的listview的升级版flatlist终于跟大家见面了，我也是关注了好久哦，现在将使用说明，和例子给大家简单的讲解下。</Text>
  <View style={styles.operations}>
    <TouchableOpacity style={styles.operationItem}>
      <Image style={styles.operationIcon} source={require('../assets/images/forword.png')} />
      <Text style={styles.operationText}>转发</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operationItem}>
      <Image style={styles.operationIcon} source={require('../assets/images/comment.png')} />
      <Text style={styles.operationText}>评论</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operationItem}>
      <Image style={styles.operationIcon} source={require('../assets/images/like.png')} />
      <Text style={styles.operationText}>点赞</Text>
    </TouchableOpacity>
  </View>
</View>);
