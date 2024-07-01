import React, { useState, useEffect } from "react";
import DateTimeInput from "./components/DateTimeInput";
import CountdownDisplay from "./components/CountdownDisplay";
import ControlButtons from "./components/ControlButtons";
import "./index.css";

const App = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (targetDate) {
      const interval = setInterval(() => {
        const now = new Date();
        const distance = new Date(targetDate) - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft("00:00:00:00");
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft(
            `${days.toString().padStart(2, "0")}:${hours
              .toString()
              .padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [targetDate]);

  const handleDateTimeChange = (dateTime) => {
    setTargetDate(dateTime);
  };

  const handleCancel = () => {
    setTargetDate(null);
    setTimeLeft("");
  };

  return (
    <div className="App">
      <DateTimeInput onDateTimeChange={handleDateTimeChange} />
      <CountdownDisplay timeLeft={timeLeft} />
      <ControlButtons onCancel={handleCancel} />
    </div>
  );
};

export default App;
