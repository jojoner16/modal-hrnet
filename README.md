# ModalHRNet

A modal component for React applications.

## Installation

You can install the ModalHRNet component via npm:

npm install employeehrnet

arduino
Copy code

## Usage

To use the ModalHRNet component in your React application, simply import it and use it in your code:

```javascript
import React from 'react';
import './modal.css';

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

```

## Props
The ModalHRNet component accepts the following props:

isOpen (boolean): Controls whether the modal is open or closed.
onClose (function): Callback function to close the modal.

## License
This project is licensed under the MIT License - see the LICENSE file for details.