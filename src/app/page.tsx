import styles from './page.module.scss'
import { ToDoList } from '@/components/ToDoList/ToDoList'

export default function Home() {
  return (
    <main className={styles.main}>
      <ToDoList />
    </main>
  )
}
