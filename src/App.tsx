import { useEffect, useState } from 'react'
import { NavLink, Link, Route, Routes, useLocation } from 'react-router-dom'
import { APP_STORE_URL, pages, ui, type Lang } from './content'

function initialLang(): Lang {
  try {
    const s = localStorage.getItem('lang')
    if (s === 'tr' || s === 'en') return s
  } catch { /* ignore */ }
  return 'en'
}

function Doc({ page }: { page: (typeof pages)['en']['privacy'] }) {
  return (
    <>
      <h1>{page.title}</h1>
      {page.intro && <p className="muted">{page.intro}</p>}
      <div className="card">
        {page.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.body}
          </section>
        ))}
      </div>
    </>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = ui[lang]
  const p = pages[lang]
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang, t.htmlLang])
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <header>
        <div className="bar">
          <Link to="/" className="brand">Vocaleaf</Link>
          <nav aria-label="Main">
            <NavLink to="/privacy" className={({ isActive }) => (isActive ? 'active' : '')}>{t.privacy}</NavLink>
            <NavLink to="/support" className={({ isActive }) => (isActive ? 'active' : '')}>{t.support}</NavLink>
            <NavLink to="/terms" className={({ isActive }) => (isActive ? 'active' : '')}>{t.terms}</NavLink>
            <button className="lang" aria-label={t.switchLabel} onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}>{t.switchTo}</button>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <div className="hero">
              <h1>Vocaleaf</h1>
              <p>{t.tagline}</p>
              <div className="btns">
                <a className="btn" href={APP_STORE_URL}>{t.appStore}</a>
                <Link className="btn alt" to="/privacy">{t.privacy}</Link>
                <Link className="btn alt" to="/support">{t.support}</Link>
              </div>
            </div>
          } />
          <Route path="/privacy" element={<Doc page={p.privacy} />} />
          <Route path="/support" element={<Doc page={p.support} />} />
          <Route path="/terms" element={<Doc page={p.terms} />} />
          <Route path="*" element={<Doc page={p.support} />} />
        </Routes>
      </main>
      <footer>© 2026 {t.footer}</footer>
    </>
  )
}
