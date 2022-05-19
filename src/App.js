import React, { useEffect, useState } from 'react';

function App() {

  const [filename,setFileName] = useState("")
  const [message,setMessage] = useState("")
  const uploadFile = (e) => {
    setFileName(e.target.files[0].name)
    setMessage("You upload a file! Thanks")
  }

  return (
  <div className="App">
  <h1>Upload a file and find the name of file</h1>
      <input type="file" onChange={(e)=>uploadFile(e)}/>
      <h1>File name is  : {filename}</h1>
      <h1>{message}</h1>
      
</div>
  )
}

export default App;
