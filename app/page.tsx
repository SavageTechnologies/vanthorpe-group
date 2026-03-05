import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import styles from './page.module.css'

const PORTFOLIO = [
  { acq: '1994', sector: 'Telecommunications', name: 'Meridian Broadband Holdings', region: 'Southeast Asia · 14 Markets', desc: 'Fiber and wireless infrastructure serving 340 million subscribers. The dominant carrier in six markets. Regulated as a public utility in three.' },
  { acq: '2001', sector: 'Media & News', name: 'Clarion Media Group', region: 'North America · 38 Markets', desc: 'Operates 214 local news outlets including newspapers, regional television stations, and digital properties. The trusted local voice in communities we serve.' },
  { acq: '2008', sector: 'Commerce', name: 'Thorngate Retail Partners', region: 'Europe · 22 Countries', desc: 'A portfolio of 4,200 retail locations across grocery, pharmacy, and convenience. Operates under 31 local brand names. The Vanthorpe name does not appear in any store.' },
  { acq: '1999', sector: 'Leisure & Parks', name: 'Cascadia Leisure Group', region: 'Global · 18 Countries', desc: 'Theme parks, resort destinations, and managed public waterways serving 48 million annual visitors. Includes three properties operated under government concession agreements.' },
  { acq: '2011', sector: 'Infrastructure', name: 'Holloway Road Concessions', region: 'Latin America · 9 Countries', desc: 'Toll road network spanning 14,000 km under 40-to-99-year concession agreements. Inflation-linked tariff structures. Essentially a fixed-income asset with road maintenance obligations.' },
  { acq: '2016', sector: 'Data & Intelligence', name: 'Stratum Analytics', region: 'Global · 52 Countries', desc: 'Consumer behavioral data platform processing 4.2 trillion data points annually. Clients include governments, insurers, and the other portfolio companies. Data not for sale. Except when it is.' },
  { acq: '2003', sector: 'Essential Services', name: 'Albrecht Water Systems', region: 'Sub-Saharan Africa · 11 Countries', desc: 'Municipal water treatment, distribution, and billing infrastructure. Operates under long-term public-private partnership agreements. Water is, as we say internally, a growth sector.' },
  { acq: '2019', sector: 'Media & News', name: 'Voss Digital Publishing', region: 'Global · Digital-First', desc: 'A network of 840 digital news and lifestyle publications reaching 1.1 billion monthly readers. Editorial independence is respected. Ownership is disclosed in the footer in 6pt font.' },
  { acq: '1997', sector: 'Telecommunications', name: 'Kelbrook Satellite Services', region: 'Global · Low Earth Orbit', desc: "Satellite communications infrastructure serving maritime, aviation, and remote broadband markets. Also holds spectrum licenses we have no immediate plans for. But we have plans." },
  { acq: '2006', sector: 'Commerce', name: 'Dunmore Financial Services', region: 'Emerging Markets · 28 Countries', desc: 'Consumer lending, insurance, and remittance services for underbanked populations. High-margin, high-volume. We prefer the term "financial inclusion."' },
  { acq: '2014', sector: 'Leisure & Parks', name: 'Aldgate Hospitality Trust', region: 'Middle East & Europe · 44 Properties', desc: 'Luxury and upper-midscale hotel portfolio. Manages properties under 12 licensed brand names. The ownership trail leads to a foundation in Liechtenstein, then here.' },
  { acq: '2020', sector: 'Essential Services', name: 'Procura Health Partners', region: 'North America & UK', desc: 'Operates urgent care clinics, diagnostic labs, and pharmacy benefit management. 3,200 locations. Acquired during a period when healthcare assets were attractively priced.' },
  { acq: '2000', sector: 'Infrastructure', name: 'Greyfeld Port Authority', region: 'Global · 9 Port Assets', desc: 'Container terminal operations across 9 strategic ports. Combined throughput of 14 million TEU annually. Geopolitically important. We have been told this in writing by three governments.' },
  { acq: '2013', sector: 'Data & Intelligence', name: 'Fenwick Credit Bureau Holdings', region: 'Africa & Southeast Asia', desc: 'Consumer and SME credit scoring infrastructure in 19 high-growth markets. A natural complement to Dunmore Financial Services. These things compound.' },
  { acq: '2018', sector: 'Commerce', name: 'Pallister Marketplace Group', region: 'South & Southeast Asia', desc: 'B2C and B2B e-commerce logistics infrastructure. Last-mile delivery in 8 countries. Also operates 1,200 urban fulfillment centers. The landlord and the tenant, simultaneously.' },
  { acq: '2022', sector: 'Media & News', name: 'Haverstock Sports & Entertainment', region: 'Global · Rights-Based', desc: 'Sports media rights, stadium naming rights, and athlete representation. Seven top-flight football clubs across four leagues. Culture is infrastructure too.' },
]

const LEADERSHIP = [
  { initial: 'A', name: 'Aaron Sims', title: 'President & Chief Executive Officer', bio: 'Founder of the Vanthorpe Group. Born and raised in the United States. Built the company from a single acquisition in 1984 into one of the most consequential private holding structures in the world. Does not do interviews.' },
  { initial: 'D', name: 'Donna Whitfield', title: 'Chief Operating Officer', bio: "Former COO at two Fortune 100 companies before joining Vanthorpe in 2011. Runs the day-to-day so Aaron doesn't have to. Describes her job as \"making sure nothing falls apart.\" It hasn't." },
  { initial: 'T', name: 'Todd Reardon', title: 'Chief Investment Officer', bio: "Grew up in Tulsa. Wharton MBA. Has closed 84 acquisitions across 19 countries. Hasn't missed a target return in 11 years. Keeps a list of companies he wants to buy. It is long." },
  { initial: 'L', name: 'Linda Bracewell', title: 'Chief Legal & Regulatory Officer', bio: 'Previously Senior Counsel at the FTC. Knows where every regulatory line is drawn because she helped draw some of them. Joined Vanthorpe in 2015. The other side of the table, it turns out, pays better.' },
]

const PRESS = [
  { source: 'The Wall Street Journal', headline: 'Vanthorpe Group Expands Domestic Infrastructure Footprint With $12B Utility Acquisition', date: 'FEBRUARY 2026' },
  { source: 'Forbes', headline: 'The Most Important American Company Nobody Talks About', date: 'JANUARY 2026' },
  { source: 'Bloomberg', headline: "Aaron Sims Has Been Building This Thing Since 1984. He's Not Done.", date: 'NOVEMBER 2025' },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO — whole section is clickable */}
        <Link href="/contact" className={styles.heroLink}>
          <section className={styles.hero}>
            <div className={styles.heroBgText}>VANTHORPE</div>
            <div className={styles.heroLine} />
            <div className={styles.heroEyebrow}>Est. 1984 · Houston, Texas · NYSE: VTG</div>
            <h1 className={styles.heroH1}>
              We build the <em>infrastructure</em> of everyday life.
            </h1>
            <p className={styles.heroSub}>
              Vanthorpe Group is a globally diversified holding company with operating businesses across
              telecommunications, media, consumer commerce, leisure, and essential services. Our portfolio
              companies serve over 2.1 billion people across 74 countries. You may not know our name.
              You use our businesses every day.
            </p>
            <div className={styles.heroFooter}>
              {[
                { num: '$847', sup: 'B', label: 'Assets Under Management' },
                { num: '74', sup: '', label: 'Countries of Operation' },
                { num: '312', sup: '', label: 'Portfolio Companies' },
                { num: '2.1', sup: 'B', label: 'People Served Daily' },
              ].map((stat, i) => (
                <div key={i} className={styles.heroStatWrap}>
                  {i > 0 && <div className={styles.heroDivider} />}
                  <div className={styles.heroStat}>
                    <div className={styles.heroStatNum}>
                      {stat.num}{stat.sup && <sup>{stat.sup}</sup>}
                    </div>
                    <div className={styles.heroStatLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Link>

        {/* MARQUEE */}
        <Link href="/contact" className={styles.blockLink}>
          <Marquee />
        </Link>

        {/* ABOUT */}
        <Link href="/contact" className={styles.blockLink}>
          <section className={styles.about}>
            <div className={styles.aboutLeft}>
              <div className={styles.eyebrow}>Who We Are</div>
              <h2 className={styles.aboutTitle}>
                Patient capital.<br /><em>Permanent presence.</em>
              </h2>
              <p className={styles.aboutBody}>
                Founded in 1984 by <strong>Aaron Sims</strong>, the Group has grown from a single acquisition
                into one of the world's most consequential private holding structures. We do not seek headlines.
                We seek <strong>enduring returns</strong>.
              </p>
              <p className={styles.aboutBody}>
                Our operating philosophy is simple: identify essential services, acquire controlling positions,
                and hold indefinitely. We have never sold a core asset. We have no intention of doing so.
              </p>
              <p className={styles.aboutBody}>
                Vanthorpe Group is not a fund. We are not a private equity firm. We are a{' '}
                <strong>permanent owner of businesses that matter</strong> — water, roads, news, bandwidth,
                food, and recreation. The things people cannot do without.
              </p>
            </div>
            <div className={styles.aboutRight}>
              {[
                { num: '01 / THESIS', name: 'Essential Infrastructure', desc: 'We acquire businesses that become difficult to remove from daily life. Switching costs are a feature, not a coincidence.' },
                { num: '02 / STRUCTURE', name: 'Permanent Capital', desc: 'No fund cycles. No LP pressure. No forced exits. We hold assets for decades because the best returns require patience and an opaque ownership structure.' },
                { num: '03 / REACH', name: 'Local at Scale', desc: 'Our businesses present themselves as community institutions. The Vanthorpe name rarely appears on the door. This is intentional.' },
                { num: '04 / VALUES', name: 'Stakeholder Alignment', desc: 'We are deeply committed to the long-term prosperity of all stakeholders in the ecosystems in which our portfolio companies operate. This sentence means many things.' },
              ].map((p) => (
                <div key={p.num} className={styles.pillar}>
                  <div className={styles.pillarNum}>{p.num}</div>
                  <div className={styles.pillarName}>{p.name}</div>
                  <div className={styles.pillarDesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </Link>

        {/* PORTFOLIO */}
        <section className={styles.portfolio}>
          <Link href="/contact" className={styles.blockLink}>
            <div className={styles.portfolioHeader}>
              <div>
                <div className={styles.eyebrow}>Our Portfolio</div>
                <h2 className={styles.sectionTitle}>
                  312 Companies.<br /><em>One Direction.</em>
                </h2>
              </div>
              <div className={styles.portfolioCount}>
                SHOWING 16 OF 312 OPERATING BUSINESSES<br />
                FULL PORTFOLIO AVAILABLE TO QUALIFIED INVESTORS ONLY
              </div>
            </div>
          </Link>
          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map((co) => (
              <Link href="/contact" key={co.name} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.cardAcq}>ACQ. {co.acq}</div>
                  <div className={styles.cardSector}>
                    <div className={styles.cardDot} />
                    {co.sector}
                  </div>
                  <div className={styles.cardName}>{co.name}</div>
                  <div className={styles.cardRegion}>{co.region}</div>
                  <div className={styles.cardDesc}>{co.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NUMBERS */}
        <Link href="/contact" className={styles.blockLink}>
          <div className={styles.numbers}>
            {[
              { val: '$847', sup: 'B', label: 'Total Asset Value' },
              { val: '$94', sup: 'B', label: 'Annual Revenue' },
              { val: '1.4', sup: 'M', label: 'Employees Worldwide' },
              { val: '42', sup: '', label: 'Years of Compounding' },
              { val: '312', sup: '', label: 'Operating Companies' },
            ].map((n) => (
              <div key={n.label} className={styles.numberCell}>
                <div className={styles.numberVal}>{n.val}{n.sup && <sup>{n.sup}</sup>}</div>
                <div className={styles.numberLabel}>{n.label}</div>
              </div>
            ))}
          </div>
        </Link>

        {/* STATEMENT */}
        <Link href="/contact" className={styles.blockLink}>
          <div className={styles.statement}>
            <blockquote className={styles.statementQuote}>
              "We do not attempt to disrupt industries. We attempt to{' '}
              <em>own them</em> — quietly, permanently, and with full appreciation for the
              trust communities place in the businesses they depend upon."
            </blockquote>
            <div className={styles.statementAttr}>
              Aaron Sims · President & Chief Executive Officer · Annual Letter, 2024
            </div>
          </div>
        </Link>

        {/* LEADERSHIP */}
        <section className={styles.leadership}>
          <Link href="/contact" className={styles.blockLink}>
            <div className={styles.eyebrow}>Leadership</div>
            <h2 className={styles.sectionTitle}>
              The people responsible.<br /><em>Broadly speaking.</em>
            </h2>
          </Link>
          <div className={styles.leaderGrid}>
            {LEADERSHIP.map((l) => (
              <Link href="/contact" key={l.name} className={styles.cardLink}>
                <div className={styles.leaderCard}>
                  <div className={styles.leaderInitial}>{l.initial}</div>
                  <div className={styles.leaderName}>{l.name}</div>
                  <div className={styles.leaderTitle}>{l.title}</div>
                  <div className={styles.leaderBio}>{l.bio}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PRESS */}
        <section className={styles.press}>
          <Link href="/contact" className={styles.blockLink}>
            <div className={styles.eyebrow}>Recent Coverage</div>
            <h2 className={styles.sectionTitle}>In the <em>press.</em></h2>
          </Link>
          <div className={styles.pressGrid}>
            {PRESS.map((p) => (
              <Link href="/contact" key={p.headline} className={styles.cardLink}>
                <div className={styles.pressCard}>
                  <div className={styles.pressSource}>{p.source}</div>
                  <div className={styles.pressHeadline}>{p.headline}</div>
                  <div className={styles.pressDate}>{p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
