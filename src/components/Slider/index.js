import { useState } from "react"
import styles from './Slider.module.scss'

const PERCENT_BUTTON = [
  1,25,50,75,100
]

function Slider() {
  const [val,setVal] = useState(0)
  
  const handleVal = (e) => {
    setVal(e.currentTarget.value)
  }

  return(
    <div className={styles.slider}>
      <div className={styles.sliderPercent}>
        <div className={styles.percentItem}>{val}</div>
        <div className={styles.percentItem}>%</div>
      </div>
      <input className={styles.slideBar} type='range' value={val} onChange={handleVal} min='0' max='100' />
      <div className={styles.btnContainer}>
        {PERCENT_BUTTON.map((el) => {
          return(
            <button className={styles.percentBtn} key={`onboarding-Slider_${el}`} onClick={() => setVal(el)} type='button'>
              {`${el}%`}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
