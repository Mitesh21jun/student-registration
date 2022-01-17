import React, { useState, useEffect } from 'react'
import './App.css';
import service from './service/service'


function App() {

  const [studentData, setStudentData] = useState('')

  const postData=(data) => {
    service.registerStudent(data).then((res) => {
      console.log(res)
    })
  }
  return (
    <div className="App">
      <button onClick={() => {
        postData({

          
            name: "xyz",
            email: "abcd@gmail.com",
            grade: "5",
            timezone: "IST",
            country_code: '91',
            phone: "99876543210",
            isparent: true
        

        })
      }} >
        POST
        
</button>
    </div>
  );
}

export default App;
