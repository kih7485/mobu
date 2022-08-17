import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  styled,
  IconButton
} from "@mui/material";
import useModal from "../../hooks/useModal";
import { EventApi, EventDef } from "@fullcalendar/common";
import CloseIcon from '@mui/icons-material/Close';
import SpanningTable from "../Table";

export interface InformationModalProps {
    title?: string;
    message: string;
    eventDef?: EventDef;
    handleClose?: (...arg: any[]) => any;
    handleInformation?: (...arg: any[]) => any;
}

const InformationModal = ({
    title,
    message,
    eventDef,
    handleClose,
    handleInformation
}: InformationModalProps) => {
    const { hideModal } = useModal();
    
  
    const onClose = () => {
        if (handleClose) {
            handleClose();
        }
        hideModal();
    };
    console.log(eventDef, "eventDef");
//   const onConfirm = async () => {
//     if (handleConfirm) {
//       await handleConfirm();
//     }
//     hideModal();
//   };

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
      sx={{ whiteSpace: "break-spaces" }}
    >
      <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
          <DialogContent> 
        <DialogContentText>{message}</DialogContentText>
          </DialogContent>
           <SpanningTable/>
      <DialogActions>
        ㄴㄴㄴzz 
      </DialogActions>
    </Dialog>
  );
};

export default InformationModal;
