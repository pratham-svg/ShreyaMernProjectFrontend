import React,{ useEffect, useState} from 'react'
import './Home.css'
import axios from 'axios'

const Home = () => {
     let userData = {
        name : '',
        email : "",
        phone : ""
     }
     let [ User , SetUser ] = useState(userData)
    let getuserData = async ()=>{
       let data = await axios.get(`http://localhost:5000/user/${localStorage.getItem('userId')}`)
       console.log(data.data.userdata)
       SetUser(data.data.userdata)
    }
    useEffect(() => {
        getuserData()
    }, [])
    
  return (
    <div>
       <div className="container">
      <h1>User Profile</h1>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td>{User.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{User.email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{User.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home
