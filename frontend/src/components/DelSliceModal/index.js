import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSlice from './DeleteSlice';

import delcss from './DeleteSlice.module.css'

function DelSliceModal({ slice }) {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false)
    }

    if (showModal === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';

    }

    return (
        <>
            <button onClick={() => setShowModal(true)}
                className={delcss.btnCard}
            >Delete</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <DeleteSlice onClose={onClose} slice={slice} />
                </Modal>
            )}
        </>
    );
}

export default DelSliceModal;
