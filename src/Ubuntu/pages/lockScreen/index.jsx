import classes from "./index.module.scss";
import { useState, useEffect } from "react";
const LockScreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const clockOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedTime = currentTime.toLocaleTimeString(undefined, clockOptions);
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);
  const [dayOfWeek, month, dayOfMonth] = formattedDate.split(" ");
  return (
    <div className={classes.lockScreen}>
      <p className={classes.time}>{formattedTime}</p>
      <p className={classes.date}>{`${dayOfWeek} ${month} ${dayOfMonth}`}</p>
      <p className={classes.desc}>Please enter</p>
    </div>
  );
};
export default LockScreen;
