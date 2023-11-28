import { TableCell, TableRow } from '@mui/material'
import React from 'react'

function Product({product}) {
  const buildVariant = (variant) => {
    return <div style={{backgroundColor: variant, height: '2rem', width: '5rem', marginLeft: 'auto', borderRadius: 4}}/>
  }

  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell align='right'>${product.price}</TableCell>
      <TableCell align='right'>{buildVariant(product.productvariantname)}</TableCell>
    </TableRow>
  )
}

export default Product