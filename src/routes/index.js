import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Input from '../components/Input/Input'
import Dropdown from '../components/Dropdown'
import Slider from '../components/Slider'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
