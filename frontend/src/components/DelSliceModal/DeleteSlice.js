import React, { useState } from 'react';

const DeleteSlice = ({ onClose }) => {
    return (
        <>
            <h1>Are you sure you want to delete this slice?</h1>
            <button>Confirm</button>
            <button onClick={onClose}>Cancel</button>
        </>
    )
}

export default DeleteSlice;
