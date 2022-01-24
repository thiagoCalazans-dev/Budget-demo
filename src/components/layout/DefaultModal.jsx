import {Box, Modal, Typography} from '@mui/material'
import React from "react";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    boxModal: {     
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: theme.palette.secondary.main,
        border: 'none',
        boxShadow: 24,
        p: 4     
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
}))

export default function DefaultModal({ open, onClose, children, title }) {

    const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={classes.boxModal}>
      <Typography variant="h4" className={classes.header} align="center">
          <header>{title}</header>
          </Typography>
          {children}
          </Box>
    </Modal>
  );
}
