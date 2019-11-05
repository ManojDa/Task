import React from 'react';
import Drawer from './drawer';
import { Input,Table,Button,Icon,Popconfirm,Form } from 'antd';
import 'antd/dist/antd.css';
import './labelView.css';
import Notification from './notification';

let count=0;
let departmentArry;
class EmptyTable extends React.Component{
    constructor(){
        super();
            this.state={
                name: '',
                age: '',
                address:'',
                departments:[],
                saveData:[],
                showResults: false,
                visibility: false
                }
            }
    
    handleName=(event)=> {
        this.setState({
         name:event.target.value
         });
       }
       handleAge=(event)=> {
         
         this.setState({
          age:event.target.value
          });
        }
        handleAddress=(event)=> {
         
         this.setState({
          address:event.target.value
          });
          
        }
        setValue = values => {
          departmentArry=values;
          const selectedDeptArry=[]
          departmentArry.map((dept,key)=>
              selectedDeptArry.push(dept.name)
          )
          this.setState({
            departments: selectedDeptArry,
         })
         }

        handleSubmitShow=()=>{
            this.setState({
              showResults:  !this.state.showResults
            })
        }

        handleSubmit= e =>{
          e.preventDefault();
          this.props.form.validateFields((err,values) => {
            if(!err){
          const copySavedata = [...this.state.saveData]
          copySavedata.push({
                key:count,
                name: this.state.name,
                age: this.state.age,
                address: this.state.address,
                department:this.state.departments,
                description:`Name:${this.state.name}  Age:${this.state.age}   Address:${this.state.address} Department:${this.state.departments}`
            });
            console.log("copydata",copySavedata);
            this.setState({
              saveData: copySavedata,
            })
            count++;
            this.handleSubmitShow();
            // this.props.form.resetFields();
            }
          });
          };
  
        handleDelete = key => {
            const values = this.state.saveData.filter((row)=>row.key !== key);
            this.setState({
              saveData: values
            });
            Notification('success','Deleted Successfully');
          };
         
          getRecord = (record) => {
            this.setState({
              name:record.name,
              age:record.age,
              address:record.address
            });
            this.handleSubmitShow();
          }

          // handleView = (record) => {
          //   this.setState({
          //     name:record.name,
          //     age:record.age,
          //     address:record.address
          //   });
          //   this.toggle();
          // }

           toggle = () => {
             this.setState({
               visibility: !this.state.visibility
             });
           }

 render(){
   const {getFieldDecorator} = this.props.form;
   const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
     },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    
    {
      title: 'Action',
      dataIndex: 'Action',
      render:(text,record) => {
        return( <div>
        <Button onClick={() => this.toggle()}><Icon type="eye"/></Button>
        <Button onClick={() => this.getRecord(record)}><Icon type="edit"/></Button>
        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
        <Button><Icon type="delete"/></Button>
        </Popconfirm>
        </div>)
      } 
    }
  ];
  
return(
    <div>
    <div style={{ display: this.state.showResults ? "none" : this.state.visibility ? "none" : "block" }}>
    <Button style={{ float:'right'}} onClick={this.handleSubmitShow}><Icon type="plus"/> NEW</Button>
    <h2>Employee Details</h2>
    <Table 
    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>} 
    columns={columns} 
    dataSource={this.state.saveData}/><br /><br />
    </div>
    <div style={{ display: this.state.showResults ? "block" : "none" }}> 
    <Icon style={{float:'right'}} onClick={this.handleSubmitShow} type="close"/>
    <h2>Employee Form</h2> 
      <Form onSubmit = {this.handleSubmit}>
          <div style={{marginTop: 30}}>
            <Form.Item
            {...formItemLayout}
            label='Name:'
            hasFeedback
            >
              {getFieldDecorator('name',{
                rules:[
                  {required:true, message:'Please input your Username!'}
                ]
              })(
            <Input type = 'text' style={{width: '30%'}} name="name"  onChange={this.handleName} placeholder="Enter Your Name"/>
              )
              }
              </Form.Item>
              <Form.Item
            {...formItemLayout}
            label='Age:'
            hasFeedback
            >
              {getFieldDecorator('age',{
                rules:[
                  {required:true, message:'Please input your Age!'}
                ]
              })(
                <Input type = 'number' style={{width: '30%'}} name="age" onChange={this.handleAge} placeholder="Enter Your Age"/>
              )
              }
              </Form.Item>
              <Form.Item
            {...formItemLayout}
            label='Address:'
            hasFeedback
            >
              {getFieldDecorator('address',{
                rules:[
                  {required:true, message:'Please input your Address!'}
                ]
              })(
                <Input type = 'text' style={{width: '30%'}} name="address"  onChange={this.handleAddress} placeholder="Enter Your Address"/>
              )
              }
              </Form.Item>            
          </div>
      </Form>
      <Button style={{float:'right',marginTop:'3%'}} onClick={this.handleSubmit}>Save</Button> 
      <Drawer setValue={this.setValue}/>
    </div>
    <div style={{ display: this.state.visibility ? "block" : "none" }}>
      <div>
      <Icon style={{float:'right'}} onClick={this.toggle} type="close"/>
      </div>
      <div className="border">
        <h1 className="header">Employee Details</h1>
        <label><h3><b className="labelclr">Name</b><b className="Namecol">:</b><i className="txt">{this.state.name}</i></h3></label><br></br>
        <label><h3><b className="labelclr">Age</b><b className="Agecol"> :</b><i className="txt">{this.state.age}</i></h3></label><br></br>
        <label><h3><b className="labelclr">Address</b><b className="Addresscol">:</b><i className="txt">{this.state.address}</i></h3></label><br></br>
        <label><h3><b className="labelclr">Department</b><b className="Deptcol">:</b><i className="txt">{this.state.departments.map(item =>(<li key={item} className="Depttxt">{item}</li>))}</i></h3></label>
    </div>
    </div>
    </div>
    )
    }
}
export default Form.create()(EmptyTable);
