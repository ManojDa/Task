import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Icon } from 'antd';
import Emptytable from './emptytable';
import Nodata from './noData';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class screenLayout extends React.Component{
    render(){
    return(
      <BrowserRouter>
  <div>   
  <Layout>
    <Header style = {{backgroundColor: '#454545'}}>
      <h1 style={{ color: 'burlywood',textAlign: 'center' }}>VEDIC BHARAT TECHNOLOGY SOLUTIONS</h1>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: 'cornsilk' }}>
      <ul style={{ listStyleType:'none', marginTop:'10px', paddingLeft: '20px' ,backgroundColor:'cornsilk' }}>
        <li>
            <div>
                <Icon type="dashboard" />
                <Link style={{marginLeft:'10px'}} to='/'>Dashboard</Link>
            </div>
        </li>
        <li>
            <div style={{ marginTop:'10px' }}>
                <Icon type="user" />
                <Link style={{marginLeft:'10px'}} to='/employeelist'>Employees Details</Link>
            </div>
        </li>
      </ul>
      </Sider>
      <Layout style = {{padding: '0 24px 24px',}}>
        <Content
          style={{
            background: 'cornsilk',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
          <Route exact path='/' component={Nodata} />
          <Route path='/employeelist' component={Emptytable} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
    <Layout>
    <footer style = {{
      backgroundColor: '#454545',
      height: '10vh',
      width:'100%',
      position:'fixed',
      bottom:'0',
      zIndex:'1',
      color:'burlywood',
      textAlign:'center',
      paddingTop: '30px'
  }}>©Copyright@ VBTS, All Rights Reserved.</footer>
    </Layout>
  </Layout>
  </div>
  </BrowserRouter>
        )
    }
}

export default screenLayout;

