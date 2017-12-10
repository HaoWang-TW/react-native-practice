import React from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { FontSize, Colors } from '../theme';
import { formatTime } from '../util/formatTime';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    paddingBottom: 6,
    backgroundColor: 'white',
    margin: 6,
    position: 'relative',
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
  moreOptions: {
    borderColor: Colors.border,
    borderWidth: 1,
    position: 'absolute',
    top: 10,
    right: 10,
    height: 100,
    width: 60,
    padding: 5,
    zIndex: 999,
  },
  dropDownIcon: {
    width: 16,
    height: 16,
  },
});
export default props =>
  (<View style={styles.item}>
    <View style={styles.header}>
      <Image
        style={styles.avator}
        source={require('../assets/images/avator.png')}
      />
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.author}>{props.detail.user}</Text>
        <Text style={styles.time}>{formatTime(props.detail.time)}</Text>
      </View>
      <View />
      <View
        style={styles.dropDown}
      >
        <TouchableOpacity
          onPress={e => console.log(e.target)}
        >
          <Image style={styles.dropDownIcon} source={require('../assets/images/dropDown.png')} />
        </TouchableOpacity>
      </View>
    </View>
    <Text
      style={styles.content}
    >{props.detail.content}</Text>
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
