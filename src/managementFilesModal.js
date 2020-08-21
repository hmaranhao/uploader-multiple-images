import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  Avatar,
  DialogActions,
  Button
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

export default function ManagementFilesModal({
  data,
  onHide,
  setFiles
}) {
  const inputFileRef2 = React.createRef()
  const [filesPreview, setFilesPreview] = useState([...data])

  const onChangeInputFile = event => {
    const uploadedFiles = [...event.target.files].map(file => {
      return {
        ...file,
        urlFake: window.URL.createObjectURL(file)
      }
    })

    setFilesPreview(currentList => ([...currentList, ...uploadedFiles]))
  }

  return (
    <Dialog open onClose={onHide}>
      <DialogContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {(filesPreview || []).map(file => {

            return (
              <Avatar
                src={file?.urlFake}
                alt={file?.name}
                style={{ width: 100, height: 100, margin: 5 }}
                key={file.urlFake}
              />
            )
          })}
          <div
            style={{
              width: 100,
              height: 100,
              margin: 5,
              borderRadius: '50%',
              backgroundColor: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => inputFileRef2.current.click()}
          >
            <Add />
          </div>
        </div>
        <input
          type="file"
          multiple
          ref={inputFileRef2}
          accept=".jpg,.jpeg,.png"
          onChange={onChangeInputFile}
          style={{ display: 'none' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          setFiles(currentList => [...currentList, ...filesPreview])
          onHide()
        }}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
