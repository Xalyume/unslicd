import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditStore from './EditStore'

function EditStoreModal({ store }) {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => setShowModal(false)
    

    return (
        <>
            <button onClick={() => setShowModal(true)}
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
