import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function ToastMessage() {
  return <> 
  
  <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#fff',
      color: '#18b59a',
    },

    // Default options for specific types
    success: {
      duration: 3000,
    },
  }}
/>
  </>
}
