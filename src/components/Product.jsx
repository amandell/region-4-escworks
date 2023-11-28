import { TableCell, TableRow } from '@mui/material'
import React from 'react'

function Product({product}) {
  const buildVariant = (variant) => {
    // return <div className={`bg-${variant}-500 w-20 h-8 rounded-md border-2 ml-auto`}/>
    return <div style={{backgroundColor: variant, height: '2rem', width: '5rem', marginLeft: 'auto', borderRadius: 4}}/>
  }

  return (
    <TableRow key={product.product_id}>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell align='right'>${product.price}</TableCell>
      <TableCell align='right'>{buildVariant(product.productvariantname)}</TableCell>
    </TableRow>
  )
}

export default Product