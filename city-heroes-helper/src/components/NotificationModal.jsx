// NotificationModal.jsx

import React from 'react';

const NotificationModal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>New Event Notification</h2>
        <p>You have received a new event:</p>
        <pre>{JSON.stringify(event, null, 2)}</pre>
      </div>
    </div>
  );
};

export default NotificationModal;
