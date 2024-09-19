import React from 'react';
import Button from '@mui/material/Button';

const App = () => {
  // Function to handle the file change event
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      console.log('File Name:', file.name);
      console.log('File Type:', file.type);
      console.log('File Size:', file.size, 'bytes');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: 400,
        flexWrap: 'wrap',
      }}
    >
      <div style={{ width: '100%', float: 'left' }}>
        <h3>File Upload</h3> <br />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        onChange={handleFileChange} // Attach the change event handler
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default App;
