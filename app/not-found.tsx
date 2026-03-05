import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        <div className={styles.code}>404</div>

        <div className={styles.divider} />

        <h1 className={styles.title}>
          This page does not exist.<br />
          <em>Neither does most of this company.</em>
        </h1>

        <p className={styles.body}>
          You've reached a page that was never built — much like several of our portfolio
          companies, two of our board members, and our Houston headquarters.
          Vanthorpe Group is a work of satire. Aaron Sims is a real person though.
          A very ambitious one.
        </p>

        <div className={styles.facts}>
          <div className={styles.fact}>
            <div className={styles.factLabel}>Real</div>
            <div className={styles.factVal}>Aaron Sims</div>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.fact}>
            <div className={styles.factLabel}>Not Real</div>
            <div className={styles.factVal}>$847B AUM</div>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.fact}>
            <div className={styles.factLabel}>Unclear</div>
            <div className={styles.factVal}>Todd Reardon</div>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.fact}>
            <div className={styles.factLabel}>Aspirational</div>
            <div className={styles.factVal}>NYSE: VTG</div>
          </div>
        </div>

        <Link href="/" className={styles.cta}>
          Return to the Homepage ↗
        </Link>

        <p className={styles.legal}>
          VANTHORPE GROUP INC. · EST. 1984 · HOUSTON, TX · THIS IS A JOKE · BUT A VERY PROFESSIONAL ONE
        </p>

      </div>
    </div>
  )
}
