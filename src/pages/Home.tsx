import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <span className="badge">Fast • Free • No signup</span>
          <h1>
            Crush HIIT with <span style={{ color: '#e5231f' }}>Tabata</span>{' '}
            <span style={{ color: '#ffd000' }}>Time</span>
          </h1>
          A clean, zero-distraction Tabata & HIIT timer. Hear beeps, track rounds, and
          stay focused while you train. It’s free forever.
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ marginTop: 0 }}>Download Now</h3>
          <p>
            <a
              href="https://apps.apple.com/us/app/tabata-time/id6751760789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ height: '60px' }}
              />
            </a>
          </p>
          <p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com/us/app/tabata-time/id6751760789"
              alt="QR code to download Tabata Time"
              style={{ marginTop: '10px' }}
            />
          </p>
          <p><small className="muted">Android version coming soon</small></p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Why athletes love it</h3>
          <div className="grid3">
            <div className="card">
              <b>Lightning start</b>
              <br />
              <small className="muted">Open & go in seconds.</small>
            </div>
            <div className="card">
              <b>Clear beeps</b>
              <br />
              <small className="muted">Audio cues for focus.</small>
            </div>
            <div className="card">
              <b>Zero distractions</b>
              <br />
              <small className="muted">No clutter, just training.</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
