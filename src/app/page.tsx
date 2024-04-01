import styles from './page.module.scss'
import { ToDo } from '../components/ToDo'

export default function Home() {
  return (
    <main className={styles.main}>
      <ToDo />
    </main>
  )
}
