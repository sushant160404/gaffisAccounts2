'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddPayrollUserPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    user_id: "",
    total_salary: "",
    deduction: "",
    basic_pay: "",
    hr_allowance: "",
    conveyence_allowance: "",
    other_allowance: "",
    tds_deduction: "",
    pt_deduction: "200",
    other_deduction: "",
    payment_date: "",
    due_date: "",
    salary_status: "pending",
    comment: "",
    gross: "",
    in_hand: "",
  });

  // 🔹 Set default Due Date = 10th of current month
  useEffect(() => {
    const now = new Date();
    const tenth = new Date(now.getFullYear(), now.getMonth(), 10)
      .toISOString()
      .split("T")[0];

    setForm((prev) => ({ ...prev, due_date: tenth }));
  }, []);

  // 🔹 Handle input + auto calculation
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    let updated = { ...form, [name]: value };

    const total = parseFloat(updated.total_salary) || 0;
    const extraDeduction = parseFloat(updated.deduction) || 0;
    const pt = 200;

    // Salary calculation logic
    const basic = total * 0.4;
    const hra = total * 0.2;
    const conveyance = total * 0.25;
    const other = total * 0.15;
    const inHand = total - pt - extraDeduction;

    updated.basic_pay = basic.toFixed(2);
    updated.hr_allowance = hra.toFixed(2);
    updated.conveyence_allowance = conveyance.toFixed(2);
    updated.other_allowance = other.toFixed(2);
    updated.gross = total.toFixed(2);
    updated.in_hand = inHand.toFixed(2);

    setForm(updated);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/payroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Payroll record added ✅");
    } else {
      alert("Failed to save payroll ❌");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-24">
      <h1 className="text-2xl font-bold mb-6">Add Employee Salary</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <div>
          <label>User ID</label>
          <input name="user_id" onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label>Total Salary</label>
          <input name="total_salary" value={form.total_salary} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label>Extra Deduction</label>
          <input name="deduction" value={form.deduction} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label>Basic Pay</label>
          <input name="basic_pay" value={form.basic_pay} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>HR Allowance</label>
          <input name="hr_allowance" value={form.hr_allowance} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>Conveyance Allowance</label>
          <input name="conveyence_allowance" value={form.conveyence_allowance} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>Other Allowance</label>
          <input name="other_allowance" value={form.other_allowance} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>Gross</label>
          <input name="gross" value={form.gross} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>In Hand Salary</label>
          <input name="in_hand" value={form.in_hand} readOnly className="border p-2 w-full bg-gray-100" />
        </div>

        <div>
          <label>Payment Date</label>
          <input type="date" name="payment_date" onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label>Due Date</label>
          <input type="date" name="due_date" value={form.due_date} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div className="col-span-2">
          <label>Salary Status</label>
          <select name="salary_status" onChange={handleChange} className="border p-2 w-full">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="cancel">Cancel</option>
          </select>
        </div>

        <div className="col-span-2">
          <label>Comment</label>
          <textarea name="comment" onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div className="col-span-2 flex justify-end gap-3">
          <button type="button" onClick={() => router.back()} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Payroll
          </button>
        </div>
      </form>
    </div>
  );
}
