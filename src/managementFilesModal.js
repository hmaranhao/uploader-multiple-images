import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  Avatar
} from '@material-ui/core'

export default function ManagementFilesModal({
  data
}) {
  const [filesPreview, setFilesPreview] = useState([...data])
  return (
    <Dialog open>
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
              />
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
