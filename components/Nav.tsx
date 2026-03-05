'use client'

import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrap}>
        <div className={styles.mark} />
        <Link href="/" className={styles.name}>Vanthorpe Group</Link>
      </div>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/sectors">Sectors</Link>
        <Link href="/newsroom">Newsroom</Link>
        <Link href="/investors">Investor Relations</Link>
        <Link href="/careers">Careers</Link>
      </div>
      <Link href="/contact" className={styles.cta}>Contact</Link>
    </nav>
  )
}
