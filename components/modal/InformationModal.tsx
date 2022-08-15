import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";
import useModal from "../../hooks/useModal";
import { EventApi, EventDef } from "@fullcalendar/common";

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
      <DialogActions>
        ㄴㄴㄴ
      </DialogActions>
    </Dialog>
  );
};

export default InformationModal;
