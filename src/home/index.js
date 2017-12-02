import * as React from 'react';
import { FlatList } from 'react-native';
import WeiboItem from '../components/WeiboItem';
import Input from '../shared/components/input';

class HomePage extends React.Component {
  renderItem = () => <WeiboItem />
  render() {
    return (
      <FlatList
        data={['sss', 'sss', 'sss', 'sss', 'sss']}
        renderItem={this.renderItem}
        ListHeaderComponent={<Input />}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

export default HomePage;
