'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './not-found.module.css'

const CONFESSION_LINES = [
  { text: "Ok. You found it.", pause: 500 },
  { text: "This whole company is fake.", pause: 400 },
  { text: "The $847 billion. The 312 portfolio companies.", pause: 400 },
  { text: "Todd Reardon from Tulsa. The Houston headquarters.", pause: 400 },
  { text: "All of it. Made up.", pause: 600 },
  { text: "Here's why.", pause: 800, big: true },
  { text: "LinkedIn has become completely unhinged.", pause: 400 },
  { text: "AI bots messaging everyone. C-suite back-slapping.", pause: 400 },
  { text: "Fake thought leadership. Engagement pod cringe.", pause: 400 },
  { text: "\"Humbled to announce\" posts every single day.", pause: 600 },
  { text: "Real humans have left the building.", pause: 800, big: true },
  { text: "So I built a fake holding company.", pause: 400 },
  { text: "To troll it.", pause: 600 },
  { text: "But also — for a real reason.", pause: 800, big: true },
  { text: "I built Haystak.", pause: 500 },
  { text: "An app for college kids with shitty resumes.", pause: 400 },
  { text: "Kids with energy, excitement, and zero connections.", pause: 400 },
  { text: "Who can't get past the ATS bot wall.", pause: 400 },
  { text: "Who can't get a reply from a real human.", pause: 600 },
  { text: "Haystak puts them directly in front of employers", pause: 300 },
  { text: "who actually hire based on who you ARE —", pause: 300 },
  { text: "not just what your resume looks like.", pause: 800, big: true },
  { text: "Vanthorpe Group is satire.", pause: 400 },
  { text: "Haystak is real.", pause: 400 },
  { text: "And it launched last week.", pause: 600 },
  { text: "👇", pause: 0, cta: true },
]

const FACTS = [
  { label: 'Real', val: 'Aaron Sims', color: '#2d6a2d' },
  { label: 'Not Real', val: '$847B AUM', color: '#8a2020' },
  { label: 'Made Up', val: 'Todd Reardon', color: '#8a6c2a' },
  { label: 'Fake', val: 'NYSE: VTG', color: '#7a7060' },
]

export default function NotFound() {
  const [started, setStarted] = useState(false)
  const [lineIdx, setLineIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started) return
    if (lineIdx >= CONFESSION_LINES.length - 1) { setDone(true); return }
    const line = CONFESSION_LINES[lineIdx]
    const t = setTimeout(() => setLineIdx(i => i + 1), line.pause || 400)
    return () => clearTimeout(t)
  }, [started, lineIdx])

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* 404 */}
        <div className={styles.code} data-text="404">404</div>
        <div className={styles.divider} />

        <h1 className={styles.title}>
          This page does not exist.<br />
          <em>Neither does most of this company.</em>
        </h1>

        {/* MINI FACTS */}
        <div className={styles.facts}>
          {FACTS.map((f, i) => (
            <div key={f.val} className={styles.fact} style={{ '--i': i } as React.CSSProperties}>
              <div className={styles.factLabel} style={{ color: f.color }}>{f.label}</div>
              <div className={styles.factVal}>{f.val}</div>
            </div>
          ))}
        </div>

        {/* THE BIG BUTTON */}
        {!started ? (
          <button className={styles.whyBtn} onClick={() => setStarted(true)}>
            <span className={styles.whyBtnText}>but why does any of this exist</span>
            <span className={styles.whyBtnArrow}>↓</span>
          </button>
        ) : (
          <div className={styles.confession}>
            {CONFESSION_LINES.slice(0, lineIdx + 1).map((line, i) => {
              if (line.cta) return null
              return (
                <p
                  key={i}
                  className={[
                    styles.cLine,
                    line.big ? styles.cBig : '',
                    i === lineIdx ? styles.cCurrent : styles.cPast,
                  ].join(' ')}
                >
                  {line.text}
                </p>
              )
            })}

            {/* HAYSTAK CTA — appears at the end */}
            {done && (
              <div className={styles.haystakCard}>
                <div className={styles.haystakEyebrow}>The actual point of all this</div>
                <div className={styles.haystakTitle}>Haystak</div>
                <p className={styles.haystakDesc}>
                  If you're a college student with more energy than LinkedIn connections —
                  or an employer who wants to hire someone real —
                  this is where you go instead.
                </p>
                <a
                  href="https://haystak.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.haystakBtn}
                >
                  Go to Haystak.com ↗
                </a>
                <div className={styles.haystakSub}>
                  No AI bots. No back-slapping. No "humbled to announce."<br />
                  Just real people getting real jobs.
                </div>
              </div>
            )}
          </div>
        )}

        <Link href="/" className={styles.cta}>
          ← Back to the fake company
        </Link>

        <p className={styles.legal}>
          VANTHORPE GROUP INC. · EST. 1984 · HOUSTON, TX · THIS IS SATIRE · HAYSTAK.COM IS NOT
        </p>

      </div>
    </div>
  )
}
