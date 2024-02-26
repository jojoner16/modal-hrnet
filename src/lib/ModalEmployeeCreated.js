import React from 'react';
import './modal.css';

/**
 * Modal component for displaying a message when an employee is created.
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines if the modal is open.
 * @param {Function} props.onClose - Function to close the modal.
 * @returns {JSX.Element} - Rendered component.
 */

const ModalEmployeeCreated = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Employee Created!</h2>
          <button className="close-button" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
};

export default ModalEmployeeCreated;
