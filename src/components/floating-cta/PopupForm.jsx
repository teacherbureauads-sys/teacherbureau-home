"use client";
import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { contactSubmit } from "~/utils/api";
import { errorToast, successToast } from "~/utils/toastMessage";
import { reportLeadConversion } from "~/utils/gtag";

// Shows 3 seconds after every page load — no "only once" restriction,
// so it reappears each time the page is loaded/reloaded.
const DELAY_MS = 3000;

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    role: "",
    tuitionMode: "",
    city: "",
    pincode: "",
    message: "",
    company: "",
    // Backend only accepts a fixed set of "source" values and "popup"
    // isn't one of them — reuse "website" (same as the main contact form)
    // so the request validates.
    source: "website",
  });
  const [loading, setLoading] = useState(false);
  const hasScheduledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Guard against this one component instance scheduling twice (e.g.
    // React Strict Mode's double-invoke in dev) — it can still fire again
    // on the next page load, just not twice for the same mount.
    if (hasScheduledRef.current) return;
    hasScheduledRef.current = true;

    const timer = setTimeout(() => {
      setOpen(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Backend rejects the request if "message" is empty — fall back to
      // a sensible default instead of forcing the visitor to type one.
      // The role ("Parent"/"Student"/"Teacher"), tuition mode
      // (Online/Offline/Home) and city/pincode are prefixed into the
      // message text itself rather than sent as their own fields, since
      // the backend only accepts specific known fields/values and would
      // reject an unrecognized one (as it did with "source").
      const baseMessage =
        formData.message?.trim() ||
        "Requested a call back via the website popup form.";
      const locationText = [formData.city, formData.pincode]
        .filter(Boolean)
        .join(" - ");
      const prefixedMessage = [
        formData.role ? `[${formData.role}]` : "",
        formData.tuitionMode ? `[${formData.tuitionMode} Tuition]` : "",
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
      reportLeadConversion();
      setOpen(false);
    } catch (error) {
      errorToast(error?.message || "Failed to submit, please try again");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-5">
      <div className="relative w-full max-w-md bg-white rounded-xl p-6 sm:p-8 border-4 border-[#FF2A00]>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-extrabold text-primary mb-1">
          Find the right tutor for you
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Leave your details and our team will call you back today.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <input
            required
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <div className="flex gap-3">
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City / Area"
              className="w-1/2 rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pin Code"
              className="w-1/2 rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <select
            required
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary bg-white"
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
              className="w-full rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary bg-white"
            >
              <option value="">
                {formData.role === "Teacher"
                  ? "I teach..."
                  : "I'm looking for..."}
              </option>
              <option value="Online">Online Tuition</option>
              <option value="Offline">Offline Tuition</option>
              <option value="Home">Home Tuition</option>
            </select>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you looking for? (optional)"
            rows={2}
            className="w-full rounded-md border border-grayLight px-4 py-2.5 text-sm outline-none focus:border-primary"
          />

          <button
            disabled={loading}
            type="submit"
            className="mt-2 rounded-md bg-primary text-white font-semibold py-3 hover:bg-primaryDark transition-colors disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get a Call Back"}
          </button>
        </form>
      </div>
    </div>
  );
}
