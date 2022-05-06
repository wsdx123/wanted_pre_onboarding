import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
    </div>
  )
}

export default App
