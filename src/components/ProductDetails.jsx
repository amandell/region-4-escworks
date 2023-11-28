import React from 'react'
import Product from './Product';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import { useQuery } from 'react-query';
import { getProductDetails } from '../api/ProductApi';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {data, error, isLoading} = useQuery(`product-${id}`, () => getProductDetails(id));
  if (isLoading) return <div className='flex justify-center'>Loading...</div>
  if (error) return <div className='flex justify-center'>An error occurred</div>

  return (
    <TableContainer sx={{width: '50%', margin: 'auto', display: 'flex', flexDirection: 'column'}} component={Paper}>
      <Toolbar className='bg-gray-200 hover:cursor-pointer'>
        <ArrowBackIcon className='text-black font-semibold mr-4' onClick={() => navigate(-1)}/>
        <h1>Product Details</h1>
      </Toolbar>
      <Table>
        
        <TableHead className='bg-gray-200'>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Variant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((product, idx) => <Product key={idx} product={product} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductDetails