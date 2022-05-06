import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input/Input'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Input />
    </div>
  )
}

export default App
