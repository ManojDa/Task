import React from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Table,Popconfirm,Icon,message} from 'antd';
import  TableData from './tableData';
// import Notification from './notification';

class drawerTable extends React.Component {
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

  info = (record) => {
    message.info(`${record.name} \u00A0 Deleted Successfully`);
  };


  handleDelete = record => {
    const values = this.state.selectedList.filter((row)=>row.key !== record.key);
    this.setState({
      selectedList: values
    });
    // this.props.setValue(values)
    // Notification('error','Deleted Successfully');
    this.info(record)
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
              <Popconfirm title="Are you sure to delete?" onConfirm={() => this.handleDelete(record)}>
                <Button><Icon type="delete"/></Button>
              </Popconfirm>
      }
    ]
    return (
      <div>
        <div style={{marginBottom:"20px",marginLeft:"3px",marginRight:"3px"}}>
        <Button onClick={this.showDrawer}><Icon type="plus"/>
         Technology
        </Button><br />
        </div>
        <Table
          columns={filterData}
          dataSource = {this.state.selectedList}
          pagination ={false}
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

export default drawerTable;
          