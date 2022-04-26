import { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
    const [tog,setTog] = useState(true);
    const onTog = (val) => {
        setTog(val === tog ? tog : !tog);
    }
    return(
            <div>
                <input type="radio" name="slide" id="defaul" className={styles.toinput} defaultChecked />
                <input type="radio" name="slide" id="detail" className={styles.toinput} />
                <div>
                    <ul className={styles.tcontainer}>
                        <li onClick={() => onTog(true)} className={styles.tdefult}>
                            <label className={styles.tlabel} htmlFor="defaul">
                                기본
                            </label>
                        </li>
                        <li onClick={() => onTog(false)} className={styles.tdefult}>
                            <label className={styles.tlabel} htmlFor="detail">
                                상세
                            </label>
                        </li>
                        <span />
                    </ul>
                </div>
            </div>
    );
}

export default Toggle;