import React, { useState } from "react";

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
import InfoIcon from '@mui/icons-material/Info';
import ScheduleTable from "../ScheduleTable";

export interface InformationModalProps {
    title?: string;
    message: string;
    eventDef?: EventDef;
    handleClose?: (...arg: any[]) => any;
    handleInformation?: (...arg: any[]) => any;
}
// const HOUSE_SECD = {
//     "01": "APT",
//     "02": "도시형/오피스텔/민간임대",
//     "04": "무순위/잔여세대",
//     "06": "계약취소주택"
// }
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
    // if (eventDef?.extendedProps) {
    //     setCategory(eventDef?.extendedProps.HOUSE_SECD);
    // }
    // console.log(category, "category");
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
          <DialogContent>
            <SpanningTable />
          </DialogContent>
           <DialogContent>
              <span><InfoIcon /> 청약일정</span>
              <ScheduleTable {...eventDef?.extendedProps} />
          </DialogContent>
      <DialogActions>
        ㄴㄴㄴzz 
      </DialogActions>
    </Dialog>
  );
};

export default InformationModal;
