import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CheckIn from './CheckIn';

function CheckInModal() {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => setShowModal(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Check In!</button>
            {showModal && (
                <Modal onClose={onClose}>
                    <CheckIn onClose={onClose}/>
                </Modal>
            )}
        </>
    );
}

export default CheckInModal;
