import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DelCheckIn from './DelCheckIn';

function DelCheckinModal({ checkin }) {
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
                    <DelCheckIn onClose={onClose} checkin={checkin} />
                </Modal>
            )}
        </>
    );
}

export default DelCheckinModal;
