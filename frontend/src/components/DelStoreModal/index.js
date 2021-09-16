import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteStore from './DeleteStore';

function DelStoreModal({ store }) {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}
            >Delete</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <DeleteStore onClose={onClose} store={store} />
                </Modal>
            )}
        </>
    );
}

export default DelStoreModal;
