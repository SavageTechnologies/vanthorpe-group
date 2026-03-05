import styles from './Marquee.module.css'

const ITEMS = [
  'Telecommunications', 'Consumer Commerce', 'Local News Media',
  'Water Infrastructure', 'Toll Roads', 'Theme Parks', 'Satellite Services',
  'Consumer Finance', 'Port Operations', 'Health Services',
  'Sports & Entertainment', 'Data Analytics', 'Retail Networks',
  'Hotel & Hospitality', 'E-Commerce Logistics', 'Credit Bureaus',
]

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <div key={i} className={styles.item}>{item}</div>
        ))}
      </div>
    </div>
  )
}
