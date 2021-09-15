import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSlice from './EditSlice'

import edit from './EditSliceModal.module.css'

function EditSliceModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}
        className={edit.btn}
      >Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSlice />
        </Modal>
      )}
    </>
  );
}

export default EditSliceModal;
