import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <div className={styles.mark} />
          <span className={styles.name}>Vanthorpe Group</span>
        </div>
        <p className={styles.tagline}>
          Building tomorrow's world.<br />
          Owning today's infrastructure.<br />
          Est. 1984.
        </p>
      </div>

      <div>
        <div className={styles.colTitle}>Company</div>
        <div className={styles.links}>
          <Link href="/about">About the Group</Link>
          <Link href="/about">Our Philosophy</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/about">History</Link>
        </div>
      </div>

      <div>
        <div className={styles.colTitle}>Investors</div>
        <div className={styles.links}>
          <Link href="/investors">Annual Reports</Link>
          <Link href="/investors">Governance</Link>
          <Link href="/investors">Board of Directors</Link>
          <Link href="/investors">Shareholder Information</Link>
          <Link href="/investors">Restricted Access Portal</Link>
        </div>
      </div>

      <div>
        <div className={styles.colTitle}>Contact</div>
        <div className={styles.links}>
          <Link href="/contact">Group Headquarters</Link>
          <Link href="/newsroom">Media Enquiries</Link>
          <Link href="/contact">Acquisition Proposals</Link>
          <Link href="/contact">Regulatory Correspondence</Link>
          <Link href="/contact">Whistleblower Portal</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2026 VANTHORPE GROUP INC. · INCORPORATED IN DELAWARE · HEADQUARTERED IN HOUSTON, TX · NYSE: VTG
        </div>
        <div className={styles.legal}>
          Vanthorpe Group Inc. is incorporated in the State of Delaware and headquartered in Houston, Texas.
          Founded in 1984 by Aaron Sims. This website does not constitute an offer or solicitation of
          securities in any jurisdiction. The full portfolio is not disclosed here or elsewhere by design.
        </div>
      </div>
    </footer>
  )
}
