import { Card, CardHeader, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CardContent } from '@mui/material';

const NotesCard = ({note, handleDelete}) => {
  return (
    <div>
      <Card>
        <CardHeader
        action={
          <IconButton onClick={()=> handleDelete(note.id)}>
          <DeleteOutlineOutlinedIcon
          color='error'
           />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
         />
         <CardContent>
           <Typography
           variant='body2'
           color='textSecondary'
           >
             {note.post}
           </Typography>
         </CardContent>
      </Card>
    </div>
  )
}

export default NotesCard