import React from 'react';
import Tabledata from './tableData';

export const tableRow = 
[
    {
      key: 1,
      name: 'Web Developer',
    },
    {
      key: 2,
      name: 'UI Designer',
    },
    {
      key: 3,
      name: 'Network Engineer',
    },
    {
      key: 4,
      name: 'Admin',
    },
    {
      key: 5,
      name: 'Database Management',
    },
    {
      key: 6,
      name: 'Software Tester',
    },
    
  ]

  var technologiesList = [];
  export class getTechnoligiesList extends React.Component{
    constructor(){
      super();
      this.state={
        technologies:''
      }
    }
  
    setValue = depList => {
      this.setState({
        technologies: depList,
     });
     technologiesList.push(this.state.technologies);
     console.log("technologiesList1",this.state.technologies);
    }

    render()
    {
      return(
        <div>
        <Tabledata 
          dataSource = {this.state.technologies} setValue={this.setValue}/>
        </div>
       
      )
    }

  }
   console.log("technologiesList",technologiesList);
export const setDepartmentlist = () => {
  console.log("technologiesList",technologiesList)
  return technologiesList
};
  
    
  