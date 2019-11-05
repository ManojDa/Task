import React from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Table,Popconfirm,Icon} from 'antd';
import  TableData from './tableData';
import Notification from './notification';

class App extends React.Component {
   state = { visible: false};

  showDrawer = () => {
    this.setState({
      visible: true,
      selectedList : [] 
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleDelete = key => {
    const values = this.state.selectedList.filter((row)=>row.key !== key);
    this.setState({
      selectedList: values
    });
    // this.props.setValue(values)
    Notification('success','Deleted Successfully');
  };

  setSelectedListValue = values => {
     this.setState({
      selectedList: values,
    });
    this.props.setValue(values);
  }
   render() {
    const filterData = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Action',
        dataIndex: '',
        render: (text, record) =>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <Button><Icon type="delete"/></Button>
              </Popconfirm>
      }
    ]
    return (
      <div>
        <div style={{marginTop: "36px",marginBottom:"36px",marginLeft:"3px",marginRight:"3px"}}>
        <Button style={{marginTop:'3%'}} onClick={this.showDrawer}><Icon type="plus"/>
         Departments
        </Button><br />
        </div>
        <Table
          columns={filterData}
          dataSource = {this.state.selectedList}
        />
        <Drawer 
          width={520}
          closable={true}
          maskClosable={false}
          onClose={this.onClose}
          visible={this.state.visible}
         >
        <div>
        <TableData 
          setSelectedListValue={this.setSelectedListValue}
        />  
        </div>
        </Drawer>
      </div>
    );
  }
}

export default App;
          