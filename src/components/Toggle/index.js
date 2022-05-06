import { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [tog, setTog] = useState(true)

  const handleTog = () => {
    setTog(!tog)
  }

  return(
    <div>
      <div className={styles.toggle}>
        <button type='button' onClick={handleTog} className={styles.togButton}>
          기본
        </button>
        <button type='button' onClick={handleTog} className={styles.togButton}>
          상세
        </button>
        <span className={tog ? styles.notSelected : styles.togSelected } />
      </div>
    </div>
  )
}

export default Toggle
