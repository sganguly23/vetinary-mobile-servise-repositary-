import React, { useState } from "react";
export default function BookAppointment() {
  const [form, setForm] = useState({ petName: "", date: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Appointment booked!");
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input placeholder="Pet Name" onChange={(e) => setForm({ ...form, petName: e.target.value })} />
      <input type="datetime-local" onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <button className="bg-blue-500 text-white p-2">Book</button>
    </form>
  );
}