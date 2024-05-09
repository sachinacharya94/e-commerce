import { useParams } from 'next/navigation'
import React from 'react'

const profile = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>{params?.name}</div>
  )
}

export default profile