import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function Error() {
    const error = useRouteError()
    // console.log(error)
  return (
      <h1 className='p-20 text-xl text-center bg-[teal] m-5'>{error.message}</h1>
  )
}