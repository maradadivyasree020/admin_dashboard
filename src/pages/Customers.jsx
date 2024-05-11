import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter,Search } from '@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'
const Customers = () => {
  return (
    <div className='ml-40'>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-40 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Delete','Search']} editSettings={{allowDeleting:true,allowEditing:true}} width="auto">
        <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar,Selection,Sort,Filter]}/>
      </GridComponent>
    </div>
    </div>
  )
}

export default Customers