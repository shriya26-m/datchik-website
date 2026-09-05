"use client";

import { FormEvent, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();

  const productFromUrl = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: productFromUrl,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please enter your requirement.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to submit enquiry.");
        return;
      }

      console.log("Enquiry submitted:", data);

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit Error:", error);

      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ================= CONTACT CONTENT ================= */}

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* ================= LEFT ================= */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Start a Conversation
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Tell us about
              <span className="block text-slate-400">
                your requirement
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-slate-500">
              Whether you are looking for one of our existing products or have
              a custom electronics requirement, our team is ready to discuss it
              with you.
            </p>

            <div className="mt-12 space-y-8">

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Email
                </p>

                <p className="mt-2 text-lg font-medium">
                  datchikelectronics@gmail.com
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Business Enquiries
                </p>

                <p className="mt-2 text-lg font-medium">
                  Product & Engineering Solutions
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Response
                </p>

                <p className="mt-2 text-lg font-medium">
                  Our team will review your enquiry.
                </p>
              </div>

            </div>
          </div>

          {/* ================= FORM ================= */}

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-7 md:p-10">

            {submitted ? (

              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#061426] text-2xl text-cyan-400">
                  ✓
                </div>

                <h2 className="mt-7 text-3xl font-semibold">
                  Enquiry received.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  Thank you for contacting Datchick Electronics. Our team will
                  review your requirement and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition hover:border-[#061426]"
                >
                  Send Another Enquiry
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-7">

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* NAME + EMAIL */}

                <div className="grid gap-7 md:grid-cols-2">

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-[#061426]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-[#061426]"
                    />
                  </div>

                </div>

                {/* PHONE */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-[#061426]"
                  />
                </div>

                {/* PRODUCT */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Product / Requirement
                  </label>

                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="mt-3 w-full border-b border-slate-300 bg-transparent px-0 py-4 text-base outline-none transition focus:border-[#061426]"
                  >
                    <option value="">
                      Select a product or requirement
                    </option>

                    <option value="Orthopaedic Heat Belt">
                      Orthopaedic Heat Belt
                    </option>

                    <option value="BP Monitor">
                      BP Monitor
                    </option>

                    <option value="Thermometer">
                      Thermometer
                    </option>

                    <option value="IR Meter">
                      IR Meter
                    </option>

                    <option value="LEL Gas Detector with Display">
                      LEL Gas Detector with Display
                    </option>

                    <option value="LEL Gas Detector without Display">
                      LEL Gas Detector without Display
                    </option>

                    <option value="Towel Warmer Controller Kit">
                      Towel Warmer Controller Kit
                    </option>

                    <option value="Body Massager">
                      Body Massager
                    </option>

                    <option value="Orthopaedic Controller Kit">
                      Orthopaedic Controller Kit
                    </option>

                    <option value="Panel Light">
                      Panel Light
                    </option>

                    <option value="Floodlight">
                      Floodlight
                    </option>

                    <option value="Streetlight">
                      Streetlight
                    </option>

                    <option value="LED Bulb">
                      LED Bulb
                    </option>

                    <option value="AC/DC Inverter">
                      AC/DC Inverter
                    </option>

                    <option value="Decorative Lights">
                      Decorative Lights
                    </option>

                    <option value="Concealed Light">
                      Concealed Light
                    </option>

                    <option value="Custom Electronics Requirement">
                      Custom Electronics Requirement
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Your Requirement / Suggestion
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="mt-3 w-full resize-none border-b border-slate-300 bg-transparent px-0 py-4 text-base outline-none transition placeholder:text-slate-400 focus:border-[#061426]"
                  />
                </div>

                {/* SUBMIT */}

                <div className="flex items-center justify-between gap-5 pt-3">

                  <p className="max-w-xs text-xs leading-5 text-slate-400">
                    By submitting this form, you are sending your requirement to
                    Datchick Electronics.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`group shrink-0 rounded-full px-7 py-4 text-sm font-semibold text-white transition ${
                      loading
                        ? "cursor-not-allowed bg-slate-400"
                        : "bg-[#061426] hover:bg-blue-600"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Enquiry
                        <span className="ml-2 transition group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                </div>

              </form>

            )}

          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#061426]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#061426] px-6 pb-24 pt-36 text-white lg:px-12">

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact Datchick Electronics
          </p>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">

            <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">
              Let's build
              <span className="block text-cyan-400">
                something useful.
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-400">
              Have a product requirement, custom electronics idea or technical
              enquiry? Tell us what you need and our team will get back to you.
            </p>

          </div>
        </div>
      </section>

      {/* FORM */}

      <Suspense
        fallback={
          <section className="px-6 py-24 lg:px-12">
            <div className="mx-auto max-w-7xl text-center text-slate-500">
              Loading contact form...
            </div>
          </section>
        }
      >
        <ContactForm />
      </Suspense>

      {/* ================= BOTTOM CTA ================= */}

      <section className="px-6 pb-24 lg:px-12">

        <div className="mx-auto max-w-7xl border-t border-slate-200 pt-16">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                Datchick Electronics
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Engineering ideas into practical solutions.
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Biomedical electronics, safety systems, smart controllers,
              wellness electronics and lighting solutions.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}