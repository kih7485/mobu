import { atom } from "recoil";
import { MODAL_TYPES } from "../components/modal/GlobalModal";
import { ConfirmModalProps } from "../components/modal/ConfirmModal";
import { AlertModalProps } from "../components/modal/AlertModal";
import { InformationModalProps } from "../components/modal/InformationModal";

export interface ConfirmModalType {
  modalType: typeof MODAL_TYPES.ConfirmModal;
  modalProps: ConfirmModalProps;
}

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.AlertModal;
  modalProps: AlertModalProps;
}

export interface InformationModalType {
  modalType: typeof MODAL_TYPES.InformationModal;
  modalProps: InformationModalProps;
}


export type ModalType = ConfirmModalType | AlertModalType | InformationModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null
});