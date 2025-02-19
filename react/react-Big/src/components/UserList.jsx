import React from 'react'

const userInfo = [
    { id: 1, name: "Shani" ,age: 25},
    { id: 2, name: "abhi" ,age: 30},
    { id: 3, name: "dikshu" ,age: 20},

]

const UserList = () => {
  return (
    <div>
        {userInfo.map((user) => (
            <ul key={user.id}>
            <h1><li>{user.name}</li></h1>
            <h1><li>{user.age}</li></h1>
            </ul>
        ))}
    </div>
  )
}

export default UserList