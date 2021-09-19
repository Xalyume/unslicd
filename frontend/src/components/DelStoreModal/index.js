import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteStore from './DeleteStore';

import deletecss from './DeleteStore.module.css'

function DelStoreModal({ store }) {
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
            className={deletecss.btnCard}
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
