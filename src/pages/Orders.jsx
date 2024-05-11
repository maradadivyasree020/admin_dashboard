import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject } from '@syncfusion/ej2-react-grids';
import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='ml-40'>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-40 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>s
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
    </div>
  )
}

export default Orders