// src/pages/SupportPage.jsx
export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="max-w-3xl mx-auto px-6 py-12">
        <div className="inline-flex items-center gap-3 rounded-full bg-gray-900/60 ring-1 ring-gray-800 px-3 py-1 text-xs text-gray-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          We typically reply within 1–2 business days
        </div>
        <h1 className="mt-4 text-4xl/tight font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">Tabata Times</span> — Support
        </h1>
        <p className="mt-3 text-gray-400 max-w-prose">
          Need help with the Tabata Times app? Contact us below or check the FAQs. If you’re writing about billing, please include the Apple ID you used for purchase (do not share your password).
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 space-y-10 pb-24">
        {/* CONTACT */}
        <section className="bg-gray-900/60 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-gray-800">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <a
              href="mailto:support@tabata-times.app"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gray-800 px-3 py-2 text-sm font-medium text-cyan-300 ring-1 ring-gray-700 hover:bg-gray-750"
            >
              Or email support@tabata-times.app
            </a>
          </div>

          {/* Netlify Forms: action -> thank-you page */}
          <form
            name="support"
            method="POST"
            action="/thanks/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mt-6 space-y-6"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="support" />

            {/* Honeypot */}
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* NAME */}
              <div className="group">
                <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="name">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                    {/* user icon */}
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
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Your full name helps us find your account faster.</p>
              </div>

              {/* EMAIL */}
              <div className="group">
                <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="email">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                    {/* mail icon */}
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
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">We’ll only use this to reply to your request.</p>
              </div>
            </div>

            {/* SUBJECT */}
            <div className="group">
              <label className="flex items-center gap-1 mb-1 text-sm font-medium text-gray-300" htmlFor="subject">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
                  {/* tag icon */}
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
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 ring-1 ring-gray-800 focus:ring-2 focus:ring-cyan-400 outline-none transition shadow-sm"
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
                  rows={6}
                  required
                  className="w-full resize-y bg-gray-900 text-gray-100 placeholder-gray-500 rounded-xl p-3 outline-none"
                  placeholder="Tell us what’s going on…"
                />
                <div className="pointer-events-none absolute right-3 bottom-2 text-[10px] text-gray-500">Max 2,000 chars</div>
              </div>
            </div>

            {/* Optional: Netlify reCAPTCHA v2. Enable in Netlify settings first. */}
            {/* <div className="pt-2"><div data-netlify-recaptcha="true" /></div> */}

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-gray-900 font-bold hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-1">
                  <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Send Message
              </button>
              <p className="text-sm text-gray-400 md:hidden">
                Or email <a href="mailto:support@tabata-times.app" className="text-cyan-300 underline-offset-4 hover:underline">support@tabata-times.app</a>
              </p>
            </div>
          </form>
        </section>

        {/* FAQS */}
        <section className="bg-gray-900/60 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-gray-800">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li>
              <strong>Subscriptions:</strong> On iOS, go to <em>Settings › Your Name › Subscriptions</em> to manage or cancel.
            </li>
            <li>
              <strong>Restore Purchases:</strong> In the app, open <em>Settings › Restore Purchases</em>.
            </li>
            <li>
              <strong>No sound/timers:</strong> Ensure silent mode is off and grant notification permissions.
            </li>
            <li>
              <strong>App won’t open:</strong> Restart your iPhone and update to the latest version of iOS and Tabata Times.
            </li>
          </ul>
        </section>

        {/* POLICIES */}
        <section className="bg-gray-900/60 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Policies</h2>
          <p className="text-gray-300">
            <a href="/privacy" className="text-cyan-300 hover:underline underline-offset-4">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/terms" className="text-cyan-300 hover:underline underline-offset-4">
              Terms of Use
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm pb-8">
        © {new Date().getFullYear()} Tabata Times
      </footer>
    </div>
  );
}
