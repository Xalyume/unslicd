import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CheckIn from './CheckIn';

import checkIn from './CheckIn.module.css'

function CheckInModal() {
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
                className={checkIn.modalBtn}
            >
                Check In!</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <CheckIn onClose={onClose} />
                </Modal>
            )}
        </>
    );
}

export default CheckInModal;
