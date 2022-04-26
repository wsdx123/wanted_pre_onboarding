import { useState } from "react";
import styles from "./Input.module.css"
import hiddeneye from "../hidden.png"
import appeareye from "../view.png"
import notcheck from "../check.png"
import checked from "../checked.png"

const Input = () => {
    const [log,setLog] = useState("");
    const [pw, setPw] = useState("");
    const [hide,setHide] = useState(false);
    const [eCheck,setECheck] = useState(false);
    const mailHandler = (e) => {
        setLog(e.target.value);
        const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(emailReg.test(e.target.value)){
            setECheck(true);
        } else{
            setECheck(false);
        }
    }
    const pwHandler = (e) => {
        setPw(e.target.value)
    }
    const formSub = (e) => {
        e.preventDefault();
    }
    const hidHandler = () => {
        setHide(!hide);
    }

    return(
        <div>
            <form className={styles.container} onSubmit={formSub}>
                <label>E-mail</label>
                <div className={styles.mailbox}>
                    <input 
                        value={log} 
                        name="email" 
                        type="email" 
                        onChange={mailHandler} 
                        placeholder="E-mail" 
                        className={styles.ininput}
                    />
                    <img 
                        src={eCheck ? checked : notcheck} 
                        className={styles.checking} 
                        onClick={hidHandler} 
                    />  
                </div>
                <label>Password</label>
                <div className={styles.mailbox}>
                    <input 
                        value={pw} 
                        name="password" 
                        type={hide ? "text" : "password" } 
                        onChange={pwHandler} 
                        placeholder="Password" 
                        id="pwID" 
                        className={styles.ininput}
                    />
                    <img 
                        src={hide ? appeareye : hiddeneye} 
                        className={styles.hid} 
                        onClick={hidHandler} 
                    />
                </div>
            </form>
        </div>
    );
}

export default Input;