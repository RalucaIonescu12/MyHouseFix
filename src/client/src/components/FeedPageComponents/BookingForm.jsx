import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingFormStyle.css";

const BookingForm = ({ onBack }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState ("");
    const [address, setAddress] = useState ("");
    const [description, setDescription] = useState("");
    const today = new Date();


    const unavailableDates = [
        new Date(2025, 5, 1),  // 1 June 2025
        new Date(2025, 5, 2),
        new Date(2025, 5, 5),
        new Date(2025, 5, 7),
        new Date(2025, 5, 12),
        new Date(2025, 5, 18),
        new Date(2025, 5, 19),
        new Date(2025, 5, 21),
        new Date(2025, 5, 25),
        new Date(2025, 5, 28),
    ];

    const availableHours = [
        "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"
    ];

    const handleDateChange = (date) => {
        if (isUnavailable(date)) {
            return;
        }
        setSelectedDate(date);
        setSelectedHour("");
    };

    const isUnavailable = (date) => {
        return unavailableDates.some(
            (unavailableDates) =>
                unavailableDates.toDateString() === date.toDateString()
        );
    };

    const isPastDate = (date) => {
        return date < today.setHours(0,0,0,0);
    };

    const handleHourSelect = (e) => {
        setSelectedHour(e.target.value);
    };


    return (
        <div className="booking-form">
            <h3>Book</h3>
            <div className="selected-datetime">
                {selectedDate && selectedHour && (
                    <p>
                        Appointment:{" "}
                        <strong>
                            {selectedDate.toDateString()}, {selectedHour}
                        </strong>
                    </p>
                )}
            </div>

            <label>Address</label>
            <input type="text" placeholder="Enter address" />

            <label>Description</label>
            <textarea placeholder="Describe the issue..." />

            <label>Calendar</label>
            <Calendar
                onClickDay={handleDateChange}
                tileDisabled={({ date }) => isUnavailable(date) || isPastDate(date)}
                tileClassName={({ date }) => {
                    if (isUnavailable(date)) return "unavailable";
                    if (selectedDate && date.toDateString() === selectedDate.toDateString())
                        return "selected";
                    if (date < today.setHours(0, 0, 0, 0)) return "past";
                    return "available";
                }}
            />

            {selectedDate && (
                <div className="hour-select">
                    <label>Select appointment hour</label>
                    <select value={selectedHour} onChange={handleHourSelect}>
                        <option value="">Select hour...</option>
                        {availableHours.map((hour, idx) => (
                            <option
                                key={idx}
                                value={hour}
                                disabled={Math.random() < 0.3} // de formă: 30% indisponibile
                            >
                                {hour}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="actions">
                <button onClick={onBack}>Cancel</button>
                <button onClick={onBack}>Send</button>
            </div>
        </div>
    );
};

export default BookingForm;