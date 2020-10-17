import React from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/'

const App = () => {


  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('dataFile', file, file.name);
  }
  
    axios.post(BASE_URL + 'uploadfile', formData).then(response => {
      this.setState({
        handleResponse: {
          isSuccess: response.status === 200,
          message: response.data.message
        },
        imageUrl: BASE_URL + response.data.file.path
      });
    }).catch(err => {
      alert(err.message);
    });
  }


  return (
    <div>
      <h3>Read CSV file in React</h3>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}

      />
    </div>
  );
}

export default App;

