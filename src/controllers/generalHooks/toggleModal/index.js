import { useEffect, useState } from "react";

const useToggleModal = ({ closeOnTime = false, time = 3000 } = {}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let timeout;
    if (closeOnTime) {
      if (modalOpen)
        timeout = setTimeout(() => {
          toggleModal();
        }, time);
    } else if (timeout !== null) {
      clearTimeout(timeout);
    }

    return () => {
      timeout !== null && clearTimeout(timeout);
    };
  }, [modalOpen]);

  const toggleModal = () => setModalOpen(!modalOpen);

  return [modalOpen, toggleModal];
};

export default useToggleModal;
