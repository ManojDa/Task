import React from 'react';
import { Button } from 'antd';
// import handleMove from './table';

export const columns =
 [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: () => <Button>Add</Button>
      // render: (record) => {
      //   console.log('record',record);
      //   return(<div><Button onClick = {handleMove('record')}>Add</Button></div>)
      // }
    }
 ];

export const data = [
    {
      key: '0',
      name: 'cooper',
      gender: 'Male',
      address: 'vegas'
    },
    {
      key: '1',
      name: 'bradley',
      gender: 'Male',
      address: 'nevada'
    },
    {
      key: '2',
      name: 'harry',
      gender: 'Male',
      address: 'downtown'
    },
    {
      key: '3',
      name: 'neil',
      gender: 'Male',
      address: 'Holland'
    },
    {
      key: '4',
      name: 'Susan',
      gender: 'Female',
      address: 'paris'
    },
    {
      key: '5',
      name: 'Raymond',
      gender: 'Female',
      address: 'trinidad'
    },
    {
      key: '6',
      name: 'stephie',
      gender: 'Female',
      address: 'Malaysia'
    },
  ];

