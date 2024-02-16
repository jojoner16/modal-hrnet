# ModalHRNet

A modal component for React applications.

## Installation

You can install the ModalHRNet component via npm:

npm install employeehrnet

## Usage

To use the ModalHRNet component in your React application, simply import it and use it in your code (exemple):

```javascript
import React from 'react';
import { ModalEmployeeCreated } from 'employeehrnet';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalEmployeeCreated isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

```

## Props
The ModalHRNet component accepts the following props:

isOpen (boolean): Controls whether the modal is open or closed.
onClose (function): Callback function to close the modal.

## License
This project is licensed under the MIT License - see the LICENSE file for details.