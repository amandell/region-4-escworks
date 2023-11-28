import React from 'react'
import {getProductData} from '../api/ProductApi';
import { useQuery } from 'react-query';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();
  const {data, error, isLoading} = useQuery('products', getProductData, {refetchOnWindowFocus: false});
  if (isLoading) return <div className='flex justify-center'>Loading...</div>
  if (error) return <div className='flex justify-center'>An error occurred</div>

  return (
    <Autocomplete
      disablePortal
      blurOnSelect
      id="combo-box-demo"
      options={data}
      sx={{ width: 300, margin: 'auto', marginTop: '10px' }}
      renderInput={(params) => <TextField {...params} label="Products"/>}
      renderOption={(props, option) => (
        <Box component="li" {...props}>{option.label}  <span className='text-gray-500 ml-auto'>{option.description}</span></Box>
      )}
      onChange={(event, newValue) => navigate(`/${newValue.product_id}`)}
    />
  )
}

export default ProductList