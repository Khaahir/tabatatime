import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div>
          <span className="badge">Fast • Free • No signup</span>
          <h1>Crush HIIT with <span style={{color:'#e5231f'}}>Tabata</span> <span style={{color:'#ffd000'}}>Time</span></h1>
            A clean, zero‑distraction Tabata & HIIT timer. Save presets, hear beeps, and keep eyes‑free focus while you train.
            It’s free forever with optional premium goodies.
        </div>
        <div className="card">
          <h3 style={{marginTop:0}}>Why athletes love it</h3>
          <div className="grid3">
            <div className="card"><b>Lightning start</b><br/><small className="muted">Open & go in seconds.</small></div>
            <div className="card"><b>Clear beeps</b><br/><small className="muted">Audio cues for focus.</small></div>
            <div className="card"><b>Saved presets</b><br/><small className="muted">Your routines, remembered.</small></div>
          </div>
        </div>
      </section>
    </div>
  )
}