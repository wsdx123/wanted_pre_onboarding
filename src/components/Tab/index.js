import { useState } from 'react'
import styles from './Tab.module.scss'

const TAB_ARR = [
  {
    tabMenu:'무',
    id:0
  },
  {
    tabMenu:'토마토',
    id:1
  },
  {
    tabMenu:'양파',
    id:2
  }
]

function Tab(){
  const [tabSelect,setTabSelect] = useState(0)
  
  const handleTab = (id) => {
    setTabSelect(id)
  }

  return(
    <div>
      <div className={styles.tabContainer}>
        {TAB_ARR.map((el) => {
          return(
            <button  
              type='button' 
              onClick={() => handleTab(el.id)} 
              className={styles.tabButton} 
              key={`onboarding-tab__${el.id}`} 
              style={{ color: `${tabSelect === el.id ? 'black' : 'gray'}` }}
            >
              {el.tabMenu}
            </button>
          )
        })}
        <span style={{ transform: `translateX(${tabSelect*100}%)` }} />
      </div>
    </div>
  )
}
export default Tab
