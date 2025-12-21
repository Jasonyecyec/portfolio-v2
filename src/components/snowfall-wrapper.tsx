"use client";
import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  // Only show snowfall between December 15-30
  const isChristmasSeason = month === 11 && day >= 15 && day <= 31;

  if (!isChristmasSeason) {
    return null;
  }

  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
