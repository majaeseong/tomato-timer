import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//컴포넌트 안의 스토어를 복사해서 자식 컴포넌트에게 전송.

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Timer/>
      </Provider>
    )
  }
}