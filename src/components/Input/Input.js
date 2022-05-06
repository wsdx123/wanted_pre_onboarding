import { useState } from 'react'
import { CheckIcon, VisibleIcon, UnvisibleIcon } from '../../assets/svgs'
import styles from './Input.module.scss'

function Input(){
  const [mail,setMail] = useState('')
  const [pw, setPw] = useState('')
  const [eCheck, setECheck] = useState(false)
  const [hide,setHide] = useState(false)

  const handleSub = (e) => {
    e.preventDefault()
  }
  const handleMail = (e) => {
    setMail(e.currentTarget.value)
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    emailReg.test(e.currentTarget.value) ? setECheck(true) : setECheck(false)
  }
  const handlePw = (e) => {
    setPw(e.currentTarget.value)
  }
  const handleVisible = () => {
    setHide(!hide)
  }

  return(
    <div>
      <form className={styles.inputForm} onSubmit={handleSub}>
        <span className={styles.label}>E-mail</span>
        <div className={styles.mailbox}>
          <input value={mail} type='text' onChange={handleMail} placeholder='E-mail' className={styles.mailPwInput} />
          <span className={styles.icons} style={{ backgroundColor: `${eCheck ? '#5ac8fa' : 'gray'}` }}>
            <CheckIcon className={styles.check} />
          </span>
        </div>
        <span className={styles.label}>Password</span>
        <div className={styles.mailbox}>
          <input value={pw} type={hide ? 'text' : 'password'} onChange={handlePw} placeholder='Password' className={styles.mailPwInput} />
          <button className={styles.icons} type='button' onClick={handleVisible}>
            {hide ? <VisibleIcon /> : <UnvisibleIcon />}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
