import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Title, Subtitle,Fab} from 'native-base';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
      date: '',
    };
  }
 
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours();
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    that.setState({
       date:
        date + '/' + month + '/' + year + ' ' ,
    });
  }
  render() {
    return (
      <Container >
        <Header>
          <Left>
          <Icon name="bars" size={30} color="#fff" />
          </Left> 
          <Body>
            <Title>TODO</Title>
            <Subtitle> {this.state.date}</Subtitle>
          </Body>
          <Right ><Icon name="ellipsis-v" size={30} color="#fff" /></Right>
        </Header>
        <View style={{flex:1}}>
        <Fab
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor:'#5067FF'  }}
      position="bottomRight"
     
  >
      <Icon name="plus" />
  </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
});
