import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Search,Inject,Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='ml-40'>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-40 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto">
        <ColumnsDirective>s
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
    </div>
  )
}

export default Employees