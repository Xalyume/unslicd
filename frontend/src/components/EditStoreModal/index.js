import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditStore from './EditStore'

import editcss from './EditStore.module.css'

function EditStoreModal({ store }) {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => setShowModal(false)

    if (showModal === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';

    }

    return (
        <>
            <button onClick={() => setShowModal(true)}
            className={editcss.btnCard}
            >Edit</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <EditStore onClose={onClose} store={store} />
                </Modal>
            )}
        </>
    );
}

export default EditStoreModal;
