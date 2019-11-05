import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table, Button,Icon } from 'antd';
import {RowData} from './rowData';
import Notification from './notification';

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

class Data extends Component {

  constructor(){
    super();
     this.state={
        value:[],
     }
  }
  // addRow = () =>{
  //   this.setState({
  //      value: [...this.state.value,...obj]
  //   },()=>{
  //        this.props.setValue(this.state.value)
  //   });
    
  // };
  handleAdd = (record,index) => {
    this.setState({
      value: [...this.state.value,record]
    },()=>{
      console.log("value",this.state.value)
      this.props.setSelectedListValue(this.state.value)
 });
 Notification('success','Added sucessfully');
}
  
render(){

  const ColumnData = 
  [
      {
        title: 'Departments',
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
   <h2>Departments</h2>
      {/* <Button type="primary" onClick={this.addRow} style={{ marginTop:"17px",marginBottom:'21px' }}>Move all</Button> */}
      <Table
       columns={ColumnData}
       rowSelection={rowSelection} 
       dataSource={RowData}
       />    
   </div>
    )
 }
}

 export default Data;
          