import React, { useState } from 'react';

import './app.css'
import ManagementFilesModal from './managementFilesModal';
import { Avatar } from '@material-ui/core';

function App() {
  const inputFileRef = React.createRef()

  const [files, setFiles] = useState([])
  const [managementFilesModal, setManagementFilesModal] = useState({
    open: false,
    data: null
  })

  const handleUpload = () => {
    const input = inputFileRef.current
    input.click()
  }

  const onChangeInputFile = event => {
    const uploadedFiles = [...event.target.files].map(file => {
      return {
        ...file,
        urlFake: window.URL.createObjectURL(file)
      }
    })

    setManagementFilesModal({
      open: true,
      data: uploadedFiles
    })
  }

  return (
    <div className="card">
      <div className="images-container">
        {(files || []).map(file => {
          return <Avatar  src={file.urlFake} key={file.urlFake} alt={file.name} />
        })}        
      </div>
      <footer>
        <input
          type="file"
          multiple
          ref={inputFileRef}
          id="uploader-input"
          accept=".jpg,.jpeg,.png"
          onChange={onChangeInputFile}
        />
        <button type="button" className="uploader-button" onClick={handleUpload}>
          Carregar um nova imagem
        </button>
      </footer>
      {managementFilesModal.open && 
        <ManagementFilesModal 
          onHide={() => setManagementFilesModal({ open: false })}
          data={managementFilesModal?.data}
          setFiles={setFiles}
        />
      }
    </div>
  );
}

export default App;
