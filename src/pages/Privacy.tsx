import React from 'react'

export default function Privacy(){
  return (
    <div className="card">
      <h2>Privacy Policy</h2>
      <p>We respect your privacy.</p>
      <ul>
        <li><b>No account • no tracking.</b> We do not collect personal data.</li>
        <li><b>Local storage only.</b> Presets you save stay in your browser’s localStorage.</li>
        <li><b>Cookies.</b> We do not use marketing cookies. If analytics are added later, we will update this page.</li>
        <li><b>Third‑party links.</b> We are not responsible for the privacy practices of external sites.</li>
        <li><b>Contact.</b> privacy@tabatatime.example</li>
      </ul>
      <small className="muted">Last updated: {new Date().toISOString().slice(0,10)}</small>
    </div>
  )
}