import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSlice from './EditSlice'

import edit from './EditSliceModal.module.css'

function EditSliceModal({ slice }) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}
        className={edit.btn}
      >Edit</button>
      {showModal && (
        <Modal onClose={onClose}>
          <EditSlice onClose={onClose} slice={slice} />
        </Modal>
      )}
    </>
  );
}

export default EditSliceModal;
