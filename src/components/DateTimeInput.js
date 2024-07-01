import React, { useState } from "react";

const DateTimeInput = ({ onDateTimeChange }) => {
  const [dateTime, setDateTime] = useState("");

  const handleChange = (e) => {
    setDateTime(e.target.value);
    onDateTimeChange(e.target.value);
  };

  return (
    <div>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={handleChange}
        max={new Date(Date.now() + 99 * 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, -8)}
      />
    </div>
  );
};

export default DateTimeInput;
