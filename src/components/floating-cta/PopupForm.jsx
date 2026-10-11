
"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { contactSubmit } from "~/utils/api";
import { errorToast, successToast } from "~/utils/toastMessage";

const INITIAL_DELAY_MS = 3000;
const REPEAT_DELAY_MS = 5000;

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const repeatTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    role: "",
    tuitionMode: "",
    city: "",
    pincode: "",
    message: "",
    company: "",
    source: "website",
  });

  // First popup appears 5 seconds after page load.
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setOpen(true);
    }, INITIAL_DELAY_MS);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(repeatTimerRef.current);
    };
  }, []);

  // Reopen 30 seconds after the visitor closes the popup.
  const closePopup = () => {
    setOpen(false);

    clearTimeout(repeatTimerRef.current);

    repeatTimerRef.current = setTimeout(() => {
      setOpen(true);
    }, REPEAT_DELAY_MS);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const baseMessage =
        formData.message.trim() ||
        "Requested a call back via the website popup form.";

      const locationText = [
        formData.city.trim(),
        formData.pincode.trim(),
      ]
        .filter(Boolean)
        .join(" - ");

      const prefixedMessage = [
        formData.role ? `[${formData.role}]` : "",
        formData.tuitionMode
          ? `[${formData.tuitionMode} Tuition]`
          : "",
        locationText ? `[${locationText}]` : "",
      ]
        .filter(Boolean)
        .join(" ");

      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        company: formData.company,
        source: formData.source,
        message: prefixedMessage
          ? `${prefixedMessage} ${baseMessage}`
          : baseMessage,
      };

      await contactSubmit(payload);

      successToast("Thanks! We'll get back to you shortly.");

      setFormData({
        name: "",
        mobile: "",
        role: "",
        tuitionMode: "",
        city: "",
        pincode: "",
        message: "",
        company: "",
        source: "website",
      });

      // Close and schedule the next popup.
      closePopup();
    } catch (error) {
      errorToast(
        error?.message || "Failed to submit, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-5 py-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl border-4 border-[#F95008] bg-white p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2
          id="popup-title"
          className="mb-1 pr-7 text-xl font-extrabold text-[#F95008]"
        >
          Find Affordable Tutors 
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          Leave Your Details — We’ll Help You Find the Right Tutor.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            autoComplete="name"
            className="w-full rounded-md border border-gray px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
          />

          <input
            required
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Phone Number"
            autoComplete="tel"
            className="w-full rounded-md border border-gray px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
          />

          <div className="flex gap-3">
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City / Area"
              autoComplete="address-level2"
              className="w-1/2 min-w-0 rounded-md border border-gray px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
            />

            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pin Code"
              inputMode="numeric"
              autoComplete="postal-code"
              className="w-1/2 min-w-0 rounded-md border border-gray px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
            />
          </div>

          <select
            required
            name="role"
            value={formData.role}
            onChange={(e) => {
              const role = e.target.value;

              setFormData((prev) => ({
                ...prev,
                role,
                tuitionMode: "",
              }));
            }}
            className="w-full rounded-md border border-gray bg-white px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
          >
            <option value="">I am a...</option>
            <option value="Parent">Parent</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>

          {formData.role && (
            <select
              required
              name="tuitionMode"
              value={formData.tuitionMode}
              onChange={handleChange}
              className="w-full rounded-md border border-gray bg-white px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
            >
              <option value="">
                {formData.role === "Teacher"
                  ? "I teach..."
                  : "I'm looking for..."}
              </option>
              <option value="Home">Home Tuition</option>
              <option value="Online">Online Tuition</option>
              <option value="Offline">Teachers Place</option>
            </select>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you looking for? (optional)"
            rows={2}
            className="w-full rounded-md border border-gray px-4 py-2.5 text-sm outline-none focus:border-[#F95008]"
          />

          <button
            disabled={loading}
            type="submit"
            className="mt-2 rounded-md bg-[#F95008] py-3 font-semibold text-white transition-colors hover:bg-[#F95008] disabled:opacity-60"
          >
            {loading ? ("Submitting...") : (<>Get a{" "}<span className="font-extrabold text-red-600 text-base">FREE</span>{" "}Demo Class</>)}
          </button>
        </form>
      </div>
    </div>
  );
}
