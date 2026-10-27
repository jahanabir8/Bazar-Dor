"use client";

import React, { useEffect, useState } from "react";

const DateBadge = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      }),
    );
  }, []);

  return (
    <span className="inline-block min-h-7 min-w-40 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 sm:text-sm">
      {date}
    </span>
  );
};

export default DateBadge;
