import React from "react";
import { useRecoilState } from "recoil";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import InformationModal from "./InformationModal";
import { modalState } from "../../recoil/modal";

export const MODAL_TYPES = { 
    ConfirmModal: "ConfirmModal",
    AlertModal: "AlertModal",
    InformationModal: "InformationModal"
} as const;

const MODAL_COMPONENTS: any = {
    [MODAL_TYPES.ConfirmModal]: ConfirmModal,
    [MODAL_TYPES.AlertModal]: AlertModal,
    [MODAL_TYPES.InformationModal]: InformationModal
};

const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;