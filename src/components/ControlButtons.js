import React from "react";

const ControlButtons = ({ onCancel }) => {
  return (
    <div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ControlButtons;
