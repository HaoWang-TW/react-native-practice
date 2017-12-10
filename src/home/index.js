import * as React from 'react';
import { View, FlatList } from 'react-native';
import WeiboItem from '../components/WeiboItem';
import Input from '../shared/components/input';
import { get } from '../util/ajax';

class HomePage extends React.Component {
  renderItem = data => <WeiboItem detail={data.item} />
  constructor(props) {
    super(props);
    this.state = {
      weibos: [],
    };
  }
  componentWillMount() {
    get('api')
      .then(weibos => this.setState({ weibos }));
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.weibos}
          renderItem={this.renderItem}
          ListHeaderComponent={<Input />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default HomePage;
