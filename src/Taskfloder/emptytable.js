import React from 'react';
import Drawer from './drawer';
import { Input,Table,Button,Icon,Popconfirm,Form,message } from 'antd';
import 'antd/dist/antd.css';
import './labelView.css';
import Notification from './notification';
import Highlighter from 'react-highlight-words';
import TextArea from 'antd/lib/input/TextArea';

let count = 0;
let countUpdate = 0;
let editRecord;
let technologyArray;
class emptyTable extends React.Component{
    constructor(){
        super();
            this.state={
                name: '',
                age: '',
                address:'',
                technologies:[],
                saveData:[],
                showResults: false,
                visibility: false,
                showUpdate: true,
                searchText: '',
                }
            }
            getColumnSearchProps = dataIndex => ({
              filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                  <Input
                    ref={node => {
                      this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                  />
                  <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                  >
                  OK
                  </Button>
                  <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                  </Button>
                </div>
              ),
              filterIcon: filtered => (
                <Icon type="filter" style={{ color: filtered ? '#1890ff' : undefined }} />
              ),
              onFilter: (value, record) =>
                record[dataIndex]
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
              onFilterDropdownVisibleChange: visible => {
                if (visible) {
                  setTimeout(() => this.searchInput.select());
                }
              },
              render: text => (
                <Highlighter
                  highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                  searchWords={[this.state.searchText]}
                  autoEscape
                  textToHighlight={text.toString()}
                />
              ),
            });
          
            handleSearch = (selectedKeys, confirm) => {
              confirm();
              this.setState({ searchText: selectedKeys[0] });
            };
          
            handleReset = clearFilters => {
              clearFilters();
              this.setState({ searchText: '' });
            };
          
    
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
          technologyArray=values;
          const selectedDeptArry=[]
          technologyArray.map((dept,key)=>
              selectedDeptArry.push(dept.name)
          )
          this.setState({
            technologies: selectedDeptArry,
         })
         }

        handleSubmitShow=()=>{
            this.setState({
              showResults:  !this.state.showResults
            })
        }

        resetFn = () => {
          this.setState({
            name:'',
            age:'',
            address:'',
          });
        }

        handleSubmit= e =>{
          e.preventDefault();
          this.props.form.validateFields((err,values) => {
            if(!err){
              const copySavedata = [...this.state.saveData];
              copySavedata.push({
                  key:count,
                  name: this.state.name,
                  age: this.state.age,
                  address: this.state.address,
                  technologies:this.state.technologies,
                  description:`Name:${this.state.name}  Age:${this.state.age}   Address:${this.state.address} technologies:${this.state.technologies}`
              });
              console.log("copydata",copySavedata);
              this.setState({
                saveData: copySavedata,
              })
              count++;
              this.handleSubmitShow();
              this.props.form.resetFields();
              this.resetFn();
            }
          });
          Notification('success','Saved Successfully');
          
          };

          info = (record) => {
            message.info(`${record.name} \u00A0 Deleted Successfully`);
          };

  
        handleDelete = record => {
            const values = this.state.saveData.filter((row)=>row.key !== record.key);
            this.setState({
              saveData: values
            });
            this.info(record)
          };
         
          getRecord = (record) => {
            console.log('record', record);
            this.setState({
              name:record.name,
              age:record.age,
              address:record.address,
              showUpdate: false
            });
            editRecord = record.key
            this.handleSubmitShow();
          }

           toggle = record => {
             this.setState({
              name:record.name,
              age:record.age,
              address:record.address,
              visibility: !this.state.visibility
             });
           }

           updateRecord=(record)=>{
            let   copySaveData = [...this.state.saveData]
            let updateData={
                  key:countUpdate,
                  name: this.state.name,
                  age: this.state.age,
                  address: this.state.address,
                 department:this.state.departments,
                 showUpdate: !this.state.showUpdate
              }
              copySaveData[editRecord]=updateData
              this.setState({
                saveData:copySaveData
              })
              countUpdate++;
              this.handleSubmitShow();
              this.props.form.resetFields();
              this.resetFn();
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
      ...this.getColumnSearchProps('name'),
     },
    {
      title: 'Age',
      dataIndex: 'age',
      ...this.getColumnSearchProps('age'),
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
        <Button shape="circle" style={{marginRight:"5px"}} onClick={() => this.toggle(record)}><Icon type="eye"/></Button>
        <Button shape="circle" style={{marginRight:"5px"}} onClick={() => this.getRecord(record)}><Icon type="edit"/></Button>
        <Popconfirm title="Are you sure to delete?" onConfirm={() => this.handleDelete(record)}>
        <Button shape="circle"><Icon type="delete"/></Button>
        </Popconfirm>
        </div>)
      } 
    }
  ];
  console.log('visibility',this.state.visibility);
return(
    <div>
      <div style={{ display: this.state.showResults ? "none" : this.state.visibility ? "none" : "block",
        border: "1px solid #e0e0eb",
        borderRadius:10,
        padding:10,
        backgroundColor: 'rgba(220,220,243)' }}>
        <Button style={{ float:'right'}} onClick={this.handleSubmitShow}><Icon type="plus"/> NEW</Button>
        <h2>Employee Details</h2>
        <div style={{border: "1px solid #f1f1f1",borderRadius:10,backgroundColor:"#fff",padding:10,boxShadow:'0px 0px 8px grey'}}>
        <Table 
        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>} 
        columns={columns} 
        dataSource={this.state.saveData}
        rowKey={(record,index)=> index+1} />
        </div>
      </div>
      <div style={{ display: this.state.showResults ? "block" : "none" }}>
      <div style={{display:"flex",float:"right",border:'1px solid #d6d2d2',borderRadius:5,boxShadow:'0px 0px 2px #4646c1'}}>
      <div>
      {this.state.showUpdate ? (
          <Button style={{border:'1px solid white',borderRight: "none"}} onClick={this.handleSubmit}>Save</Button> )
            : null
          }
          </div>
          <div>
          <Button  style={{border:'1px solid white'}} onClick={this.handleSubmitShow}><Icon style={{ fontSize: '14px', marginTop: '1%'}} type="close"/></Button>
          </div>
      </div> 
        
        <h2>Employee Form</h2>
        <div style={{border: "1px solid #e0e0eb",borderRadius:10,padding:10,backgroundColor: 'rgba(220,220,243)'}}> 
          <div  style={{border: "1px solid #f1f1f1",borderRadius:10,backgroundColor:"#fff",padding:10,boxShadow:'0px 0px 8px grey'}} >
          {/* {this.state.showUpdate ? (
          <Button style={{marginLeft: '94%'}} onClick={this.handleSubmit}>Save</Button> )
            : null
          } */}
            <Form>
                <div style={{ display:'Flex' }}>
                  <Form.Item
                  {...formItemLayout}
                  label='Name:'
                  hasFeedback
                  >
                    {getFieldDecorator('name',{
                      initialValue: this.state.name,
                      rules:[
                        {required:true, message:'Please input your Username!'}
                      ]
                    })(
                  <Input type = 'text' style={{width: '100%'}} name="name"  onChange={this.handleName} placeholder="Enter Your Name"/>
                    )
                    }
                    </Form.Item>
                    <Form.Item
                  {...formItemLayout}
                  label='Age:'
                  hasFeedback
                  style={{marginLeft: 20}}
                  >
                    {getFieldDecorator('age',{
                      initialValue: this.state.age,
                      rules:[
                        {required:true, message:'Please input your Age!'}
                      ]
                    })(
                      <Input type = 'number' style={{width: '100%'}} name="age" onChange={this.handleAge} placeholder="Enter Your Age"/>
                    )
                    }
                    </Form.Item>
                    <Form.Item
                  {...formItemLayout}
                  label='Address:'
                  hasFeedback
                  style={{marginLeft: 40}}
                  >
                    {getFieldDecorator('address',{
                      initialValue: this.state.address,
                      rules:[
                        {required:true, message:'Please input your Address!'}
                      ]
                    })(
                      <TextArea style={{width: '100%'}} name="address" rows={1} onChange={this.handleAddress} placeholder="Enter Your Address"/>
                    )
                    }
                    </Form.Item> 
                </div>
            </Form>
            {this.state.showUpdate ? (
              null ) :
            <Button style={{marginTop:"3%",}} onClick={this.updateRecord}>Update</Button> 
            }

          </div>
          <div  style={{border: "1px solid #f1f1f1",borderRadius:10,backgroundColor:"#fff",marginTop: 10,padding:10,boxShadow:'0px 0px 8px grey'}} >
            <Drawer setValue={this.setValue}/>
          </div>
        </div>
      </div>
      {this.state.visibility ? (
          <div>
            <div>
              <Icon style={{float:'right'}} onClick={this.toggle} type="close"/>
            </div>
            <div className="border">
              <h1 className="header">Employee Details</h1>
              <label><h3><b className="labelclr">Name</b><b className="Namecol">:</b><i className="txt">{this.state.name}</i></h3></label><br></br>
              <label><h3><b className="labelclr">Age</b><b className="Agecol"> :</b><i className="txt">{this.state.age}</i></h3></label><br></br>
              <label><h3><b className="labelclr">Address</b><b className="Addresscol">:</b><i className="txt">{this.state.address}</i></h3></label><br></br>
              <label><h3><b className="labelclr">Technologies</b><b className="Deptcol">:</b><i className="txt">{this.state.technologies.map(item =>(<li key={item} className="Depttxt">{item}</li>))}</i></h3></label>
          </div>
          </div>
        ) : null }
    </div>
    )
    }
}
export default Form.create()(emptyTable);
