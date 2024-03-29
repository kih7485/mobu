import { useRecoilState } from "recoil";
import { ModalType, modalState } from "../recoil/modal";

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = ({ modalType, modalProps }: ModalType) => { 
    setModal({ modalType, modalProps }); 
  };

  const hideModal = () => {
    setModal(null);
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal
  };
}
