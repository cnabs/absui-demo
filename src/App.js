/*
 * @Author: LD
 * @Date: 2019-07-17 11:08:47
 * @LastEditTime: 2020-10-15 11:43:15
 * @LastEditors: LD
 * @FilePath: /create-react-app-with-antd-master/src/App.js
 * @Description: 
 */
import React from 'react';
import './App.css';
import { Button } from 'antd';
import { Alert } from 'absui';

function App() {
  return (
    <div className="App">
      <Alert kind="info">这是一条提示</Alert>
      <Button type="primary">点击</Button>
    </div>
  );
}

export default App;
