'use client'
import styles from './page.module.css'


export default function Home() {

  const handle = () => {
    fetch('/api/hello', {
      method: 'POST'
    })
  }

  return (
    <main className={styles.main}>
      <button onClick={handle}>Fetch</button>
    </main>
  )
}
