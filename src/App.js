import { useEffect, useState } from "react";
import "./App.css";
import CountdownPage from "./CountDown";
import BirthdayCelebration from "./BirthdayCelebration";

const TARGET_DATE = new Date("2026-11-04T00:00:00+05:30").getTime();



function getTimeLeft() {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) {
    return {
      finished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    finished: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft.finished ? (
    <BirthdayCelebration />
  ) : (
    <CountdownPage timeLeft={timeLeft} />
  );
}