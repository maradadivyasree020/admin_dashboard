import { ColumnDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { ordersGrid } from '../data/dummy'

const Header = ({category,title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header