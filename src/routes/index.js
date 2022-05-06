import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input/Input'
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
