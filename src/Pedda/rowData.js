import React from 'react';
import Tabledata from './tableData';
// import {Table} from ''

export const RowData = 
[
    {
      key: 1,
      name: 'Web Developer',
      // age: 22,
      // address: 'kakinada',
      // description: 'My name is jyothi, I am 22 years old, living in kakinada.'
    },
    {
      key: 2,
      name: 'UI Designer',
      // age: 22,
      // address: 'palakollu',
      // description: 'My name is suma, I am 22 years old, living in palakollu.'
    },
    {
      key: 3,
      name: 'Network Engineer',
      // age: 22,
      // address: 'kurnool',
      // description: 'My name is rajeswari, I am 22 years old, living in kurnool.'
    },
    {
      key: 4,
      name: 'Admin',
      // age: 25,
      // address: 'kakinada',
      // description: 'My name is sirish, I am 25 years old, living in kakinada.'
    },
    {
      key: 5,
      name: 'Database Management',
      // age: 25,
      // address: 'khammam',
      // description: 'My name is sandeep, I am 25 years old, living in khammam.'
    },
    {
      key: 6,
      name: 'Software Tester',
      // age: 24,
      // address: 'hyderabad',
      // description: 'My name is praveen, I am 24 years old, living in hyderabad.'
    },
    
  ]

  var departmentList = [];
  // export fn = data => {
  //   department = data;
  // }
  // export fn1 = data => department;
  export class getDepartmentList extends React.Component{
    constructor(){
      super();
      this.state={
        department:''
      }
    }
  
    setValue = depList => {
      this.setState({
        department: depList,
     });
     departmentList.push(this.state.department);
     console.log("departmentList1",this.state.department);
    }

    render()
    {
      return(
        <div>
        <Tabledata 
          dataSource = {this.state.department} setValue={this.setValue}/>
        </div>
       
      )
    }

  }
   console.log("departmentList",departmentList);
export const setDepartmentlist = () => {
  console.log("departmentList",departmentList)
  return departmentList
};
  
    
  