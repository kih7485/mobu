import { atom } from "recoil";
import { MODAL_TYPES } from "../components/modal/GlobalModal";
import { ConfirmModalProps } from "../components/modal/ConfirmModal";
import { AlertModalProps } from "../components/modal/AlertModal";

const { ConfirmModal, AlertModal } = MODAL_TYPES;

export interface ConfirmModalType {
  modalType: typeof ConfirmModal;
  modalProps: ConfirmModalProps;
}

export interface AlertModalType {
  modalType: typeof AlertModal;
  modalProps: AlertModalProps;
}

export type ModalType = ConfirmModalType | AlertModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null
});