import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import Emptytable from './emptytable';
import Nodata from './noData';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class screenLayout extends React.Component{
    render(){
    return(
      <BrowserRouter>
  <div>   
  <Layout>
    <Header style = {{backgroundColor: '#15317e'}}>
      <h1 style={{ color: 'white',textAlign: 'center' }}>VEDICBHARAT TECHNOLOGY SOLUTIONS</h1>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
              <Icon type="dashboard" />
              <Link to='/'>Dashboard</Link>
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
              <Icon type="user" />
              <Link to='/employeelist'>Employees Details</Link>
              </span>
            }
          >
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style = {{padding: '0 24px 24px',}}>
        <Content
          style={{
            background: '#fff',
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
      backgroundColor: '#15317e',
      height: '10vh',
      width:'100%',
      position:'fixed',
      bottom:'0',
      zIndex:'1',
      color:'white',
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

