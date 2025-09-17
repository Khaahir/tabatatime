import { useState } from 'react';
// src/pages/SupportPage.jsx
export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-925 to-gray-950 text-gray-100">
      <header className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-900/70 ring-1 ring-gray-800 px-4 py-1 text-xs text-gray-400 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          We typically reply within 1–2 business days
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow">Tabata Times</span>
          <span className="text-gray-100"> — Support</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Need help with the Tabata Times app? Contact us below or check the FAQs. If you’re writing about billing, please include the Apple ID you used for purchase (do not share your password).
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 space-y-12 pb-24">
        {/* CONTACT */}
        <section className="bg-gray-900/80 backdrop-blur rounded-3xl p-8 shadow-2xl ring-1 ring-gray-800 hover:ring-cyan-400/40 transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <a
              href="mailto:support@tabata-times.app"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-800 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-gray-700 hover:bg-gray-750 hover:text-cyan-200 transition"
            >
              ✉️ Email jpandpadev@gmail.com
            </a>
          </div>

          <form
            name="support"
            method="POST"
            action="/thanks/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            encType="multipart/form-data"
            onSubmit={() => setSubmitting(true)}
            className="mt-6 space-y-7"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="support" />

            {/* Honeypot */}
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60">
              {/* NAME */}
              <div className="group">
                <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="name">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 22a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="group">
                <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="email">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    required
                    autoComplete="email"
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            {/* TOPIC & DEVICE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group">
                <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="topic">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full p-3 rounded-xl bg-gray-900 text-gray-100 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
                  defaultValue="Bug report"
                >
                  <option>Bug report</option>
                  <option>Feature request</option>
                  <option>General question</option>
                </select>
              </div>

              <fieldset className="group">
                <legend className="block mb-1 text-sm font-medium text-gray-300">Device</legend>
                <div className="flex flex-wrap gap-3">
                  {['iPhone','iPad','Other'].map((d) => (
                    <label key={d} className="inline-flex items-center gap-2 rounded-full bg-gray-900 ring-1 ring-gray-800 px-3 py-2 text-sm text-gray-300 cursor-pointer hover:ring-cyan-400">
                      <input type="radio" name="device" value={d} className="accent-cyan-400 bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60" />
                      {d}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* SUBJECT */}
            <div className="group">
              <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="subject">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.59 13.41 12 22l-9-9 8.59-8.59A2 2 0 0 1 13 4h6v6a2 2 0 0 1-.41 1.41Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
                  </svg>
                </span>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
                  placeholder="e.g. Subscription issue / Bug report"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="group">
              <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="message">
                Message <span className="text-cyan-400">*</span>
              </label>
              <div className="relative rounded-xl ring-1 ring-gray-800 focus-within:ring-2 focus-within:ring-cyan-400 transition shadow-sm">
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  maxLength={2000}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y bg-gray-900 text-gray-100 placeholder-gray-500 rounded-xl p-3 outline-none bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
                  placeholder="Tell us what’s going on… Include steps to reproduce, screenshots, and your iOS + app version if reporting a bug."
                />
                <div className={`pointer-events-none absolute right-3 bottom-2 text-[10px] ${message.length > 1800 ? 'text-rose-400' : 'text-gray-500'}`}>
                  {message.length}/2000
                </div>
              </div>
            </div>

            {/* ATTACHMENT */}
            <div className="group">
              <label className="block mb-1 text-sm font-medium text-gray-300" htmlFor="screenshot">Attachment (optional)</label>
              <input
                id="screenshot"
                name="screenshot"
                type="file"
                accept="image/*,application/pdf"
                className="block w-full text-sm text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:font-semibold file:text-gray-900 hover:file:bg-cyan-300 bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-700/60 shadow-inner focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/60"
              />
              <p className="mt-1 text-xs text-gray-500">Attach a screenshot or PDF. Max size depends on your Netlify plan.</p>
            </div>

            {/* Optional: Netlify reCAPTCHA v2. Enable in Netlify settings first. */}
            {/* <div className="pt-2"><div data-netlify-recaptcha="true" /></div> */}

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-gray-900 font-bold hover:from-cyan-300 hover:to-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {submitting ? (
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity=".25" />
                    <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" strokeWidth="3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-1">
                    <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-sm text-gray-400 md:hidden">
                Or email <a href="mailto:support@tabata-times.app" className="text-cyan-300 underline-offset-4 hover:underline">jpandpadev@gmail.com</a>
              </p>
            </div>
          </form>
        </section>


        {/* POLICIES */}
        <section className="bg-gray-900/80 backdrop-blur rounded-3xl p-8 shadow-xl ring-1 ring-gray-800 text-center">
          <h2 className="text-3xl font-semibold mb-4">Policies</h2>
          <p className="text-gray-300 space-x-4">
            <a href="/privacy" className="text-cyan-300 hover:underline underline-offset-4">Privacy Policy</a>
            <span>·</span>
            <a href="/terms" className="text-cyan-300 hover:underline underline-offset-4">Terms of Use</a>
          </p>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm pb-10">
        © {new Date().getFullYear()} Tabata Times
      </footer>
    </div>
  );
}
