import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
          <div className="brand">
            <img src="/logo.png" alt="Tabata Time logo" />
            <div>
              <div className="title">TABATA <span style={{color:'#ffd000'}}>TIME</span></div>
              <small className="muted">Free HIIT & Tabata Timer</small>
            </div>
          </div>
          <nav className="nav">
            <NavLink to="/" end className={({isActive})=> isActive?'active':''}>Home</NavLink>
            <NavLink to="/faq" className={({isActive})=> isActive?'active':''}>FAQ</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive?'active':''}>About</NavLink>
            <NavLink to="/terms" className={({isActive})=> isActive?'active':''}>Terms</NavLink>
            <NavLink to="/privacy" className={({isActive})=> isActive?'active':''}>Privacy</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer container">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap'}}>
          <div>© {new Date().getFullYear()} Tabata Time</div>
          <div style={{display:'flex', gap:12}}>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}