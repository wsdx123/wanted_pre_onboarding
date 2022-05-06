import { useEffect, useState } from 'react'
import { DownIcon } from '../../assets/svgs'
import styles from './Dropdown.module.scss'
import { cx } from '../../styles'


const DROP_DATA = [
  {id:1, value: 'BTCUSD.PERP'},
  {id:2, value: 'BATUSD.PERP'},
  {id:3, value: 'BCHUSD.PERP'},
  {id:4, value: 'ETHUSD.PERP'},
  {id:5, value: 'LTCUSD.PERP'},
  {id:6, value: 'XRPUSD.PERP'},
  {id:7, value: '1000SHIBUSD.PERP'}
]

function Dropdown() {
  const [arrow,setArrow] = useState(false)
  const [dropList,setDropList] = useState([])
  const [choosed, setChoosed] = useState('')
  const [search,setSearch] = useState('')

  const handleArrow = () => {
    setArrow(!arrow)
  }
  const handleChoose = (e) => {
    setChoosed(e.currentTarget.textContent)
    setArrow(false)
  }
  const handleSearch = (e) => {
    setSearch(e.currentTarget.value)
  }
  useEffect(() => {
    search ? setDropList(dropList.filter((data) => data.value.toLowerCase().includes(search.toLowerCase()))) : setDropList(DROP_DATA)
  },[search])

  return (
    <div>
      <div className={styles.dropDown}>
        <button 
          className={styles.openDrop} 
          onClick={handleArrow} 
          type='button'
        >
          <div>
            {choosed === '' ? 'All Symbols' : choosed}
          </div>
          <DownIcon style={{ transform: `${arrow ? 'rotate(180deg)' : ''}`}} className={styles.dIcon} />
        </button>
        <div 
          style={{ visibility: `${arrow ? 'visible' : 'hidden'}` }} 
          className={styles.dropContainer}
        >
          <input 
            type='text' 
            value={search} 
            onChange={handleSearch} 
            className={styles.searchBar} 
            placeholder='Search Symbol'
          />
          <ul className={styles.filterdDrop}>
            {dropList.map((el) => {
              return(
                <li 
                  className={styles.filterElement} 
                  key={`onboarding-drop_${el.id}`}
                >
                  <button type='button' onClick={handleChoose}>
                    {el.value}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
