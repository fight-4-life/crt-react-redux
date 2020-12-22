import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Layout, Menu} from 'antd';

import AdsContainer from './components/Ads/AdsContainer';
import {Time} from "./utils/Time";

import 'antd/dist/antd.css';
import './App.css';

const {Header, Content, Footer} = Layout;

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Layout className="layout">
            <Header>
              <Menu theme="dark" mode="horizontal">
                <Time/>
              </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
              <div className="site-layout-content">
                <Route path='/'
                       render={() => <AdsContainer
                       />}
                />
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Vladimir L. for Crtweb</Footer>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
