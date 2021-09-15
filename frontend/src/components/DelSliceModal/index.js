import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSlice from './DeleteSlice';

import delcss from './DeleteSlice.module.css'

function DelSliceModal() {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}
                className={delcss.btn}
            >Delete</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <DeleteSlice onClose={onClose} />
                </Modal>
            )}
        </>
    );
}

export default DelSliceModal;
