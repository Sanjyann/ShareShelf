
"use client";

import { useState } from "react";
import { CalendarDays, X } from "lucide-react";

interface BorrowRequestDialogProps {
  itemId: string;
  itemTitle: string;
}

export function BorrowRequestDialog({
  itemId,
  itemTitle,
}: BorrowRequestDialogProps) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!startDate || !endDate) {
      setError("Please select both borrowing dates.");
      return;
    }

    if (startDate < today) {
      setError("Start date cannot be in the past.");
      return;
    }

    if (endDate <= startDate) {
      setError("Return date must be after the start date.");
      return;
    }

    // Temporary mock submission.
    // We'll connect this to the backend API later.
    alert(
      `Demo request created for ${itemTitle} (Item ID: ${itemId}).`
    );

    setStartDate("");
    setEndDate("");
    setMessage("");
    setOpen(false);
  }

  return (
    <>
      {/* Open Dialog Button */}
      <button
        type="button"
        onClick={() => {
          setError("");
          setOpen(true);
        }}
        className="w-full rounded-lg bg-[#52796F] px-6 py-3 font-medium text-white transition-colors hover:bg-[#354F52]"
      >
        Borrow Request
      </button>

      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="borrow-dialog-title"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Heading */}
            <div className="mb-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCE9E3] text-[#354F52]">
                <CalendarDays className="h-5 w-5" />
              </div>

              <h2
                id="borrow-dialog-title"
                className="text-xl font-bold text-[#242B2A]"
              >
                Request to Borrow
              </h2>

              <p className="mt-1 text-sm text-[#78817D]">
                {itemTitle}
              </p>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label
                  htmlFor="startDate"
                  className="mb-2 block text-sm font-medium text-[#242B2A]"
                >
                  Borrowing Start Date
                </label>

                <input
                  id="startDate"
                  type="date"
                  min={today}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#52796F]/30"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="mb-2 block text-sm font-medium text-[#242B2A]"
                >
                  Expected Return Date
                </label>

                <input
                  id="endDate"
                  type="date"
                  min={startDate || today}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#52796F]/30"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#242B2A]"
                >
                  Message to Lender (Optional)
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell the lender why you need this resource..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#52796F]/30"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#52796F] px-6 py-3 font-medium text-white transition-colors hover:bg-[#354F52]"
              >
                Send Borrow Request
              </button>

              <p className="text-center text-xs text-[#78817D]">
                This is a demo request. Backend submission will be added later.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
