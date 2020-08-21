import React, { useState } from 'react';

import './app.css'
import ManagementFilesModal from './managementFilesModal';

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
        />
      }
    </div>
  );
}

export default App;
