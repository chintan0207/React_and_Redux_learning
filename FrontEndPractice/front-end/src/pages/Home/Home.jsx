import React, { useState } from "react";
import "./Home.scss";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="h-screen max-w-screen-xl box-border mx-auto">
      <h1 className="text-3xl">Home</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select a date"
          value={selectedDate}
          onChange={(newValue) => {
            console.log(newValue); // Logs the selected date
            setSelectedDate(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Home;
