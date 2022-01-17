import React, { useState, useEffect } from "react";
import "./App.css";
import service from "./service/service";

function App() {
  const [studentData, setStudentData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [timezone, setTimezone] = useState("");
  const [country_code, setCountry_code] = useState("");
  const [phone, setPhone] = useState("");
  const [isparent, setIsParent] = useState("");

  const postData = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("grade", grade);
    data.append("timezone", timezone);
    data.append("country_code", country_code);
    data.append("phone", phone);
    data.append("isparent", isparent);

    service.registerStudent(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          postData()
        }}
      >
        POST
      </button>
    </div>
  );
}

export default App;
