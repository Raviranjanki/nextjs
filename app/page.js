'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

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
