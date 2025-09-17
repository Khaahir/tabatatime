import React from 'react'

export default function Terms(){
  return (
    <div className="card">
      <h2>Terms of Service</h2>
      <p>By using Tabata Time (the “Service”), you agree to these Terms. If you do not agree, do not use the Service.</p>
      <ol>
        <li><b>License.</b> We grant you a personal, non‑exclusive, non‑transferable license to use the Service.</li>
        <li><b>Health Notice.</b> Always consult a physician before starting any exercise program. You use the timer at your own risk.</li>
        <li><b>Accounts.</b> No account is required. If accounts are added later, you are responsible for safeguarding your credentials.</li>
        <li><b>Acceptable Use.</b> Do not misuse or attempt to disrupt the Service.</li>
        <li><b>Disclaimer.</b> The Service is provided “as is” without warranties of any kind.</li>
        <li><b>Limitation of Liability.</b> To the maximum extent permitted by law, we are not liable for any indirect or consequential damages.</li>
        <li><b>Changes.</b> We may update these Terms. Continued use means you accept the updates.</li>
        <li><b>Contact.</b> jpandpadev@gmail.com</li>
      </ol>
      <small className="muted">Last updated: {new Date().toISOString().slice(0,10)}</small>
    </div>
  )
}