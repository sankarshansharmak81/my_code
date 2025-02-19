import React from 'react'

const UserSatuts = ({loggedIn , isAdmin}) => {
  if (loggedIn == true && isAdmin==true) {
    return <h1>Welcome Admin</h1>
  }
  else if (loggedIn==true && isAdmin==false)
     {
    return <h1>Welcome User</h1>
  }
  
}

export default UserSatuts