import React, { useEffect, useState } from "react";

import { daysOfWeek, months } from "../utils/constants";

const DataTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = daysOfWeek[time.getDay()];
  const month = months[time.getMonth()];
  const day = time.getDate();
  const year = time.getFullYear();
  const watch = time.toLocaleTimeString();

  return (
    <div className="datetime">
      <div className="datetime__calendar">
        <div className="datetime__day">
          {day} {month} {year}
        </div>
        <div className="datetime__day-of-week">{dayOfWeek}</div>
      </div>
      <div className="datetime__watch">{watch}</div>
    </div>
  );
};

export default DataTime;
