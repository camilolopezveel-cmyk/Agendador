import React, { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState('');

  const handleBooking = async () => {
    setStatus('Booking...');
    try {
      // Hardcoded for demonstration purposes
      const appointmentData = {
        userId: 1,
        serviceId: 1,
        startTime: new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 19).replace('T', ' '),
        endTime: new Date(date.getTime() - date.getTimezoneOffset() * 60000 + 30 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '),
      };

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(`Success: ${result.message}`);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Booking failed:', error);
      setStatus('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Book an Appointment</h2>
      <div className="flex flex-col items-center">
        <input
          type="datetime-local"
          value={date.toISOString().substring(0, 16)}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="p-2 border rounded mb-4"
        />
        <button
          onClick={handleBooking}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
};

export default Calendar;
