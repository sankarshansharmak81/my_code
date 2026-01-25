import React, { useState } from 'react'
import { useEffect } from 'react'
import { HiH2 } from 'react-icons/hi2'

const UseEffect = () => {
 
   const[post , setPost] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const response = await fetch("")
      const data = await response.json()
      setPost(data)
    }

    fetch()
  },[])


  return (
    <div>
    <h1>First post title: </h1>
    {post.length > 0 ? <h2>{post[0].title}</h2> : <p>Loading....</p>}
    </div>
  )
}

export default UseEffect