import React from 'react'
import { CircularProgress } from '@material-ui/core';

export const Loader = () => {
  return (
    <div className='center'>
      <CircularProgress />
    </div>
  )
}