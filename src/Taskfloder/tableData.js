import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Icon,message } from 'antd';
import {tableRow} from './rowData';
// import Notification from './notification';

// rowSelection object indicates the need for row selection
let obj = [];
let rowData;
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    rowData = selectedRows;
    obj = rowData ; 
    console.log(`selectedRowKeys: ${selectedRowKeys}`,obj);
  }
}; 

class data extends Component {
  constructor(){
    super();
     this.state={
        value:[],
     }
  }
  info = (record) => {
    message.info(`${record.name} \u00A0 Added Successfully`);
  };
  
 handleAdd = (record,index) => {
    this.setState({
      value: [...this.state.value,record]
    },()=>{
      console.log("value",this.state.value)
      this.props.setSelectedListValue(this.state.value)
 });
//  Notification('success','Added sucessfully');
this.info(record);
}
  
render(){
  const columnData = 
  [
      {
        title: 'Technologies',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render:(text,record,index) => {
          return( <Button onClick={() => this.handleAdd(record,index)}><Icon type="plus"/></Button>)
        } 
      }
    ]

    return(
   <div>   
   <h2>Technologies</h2>
      {/* <Button type="primary" onClick={this.addRow} style={{ marginTop:"17px",marginBottom:'21px' }}>Move all</Button> */}
      <Table
      bordered
     columns={columnData}
     dataSource={tableRow}
       />    
   </div>
    )
 }
}

 export default data;
          