import React from 'react'
import styles from './InfoList.module.css'

const InfoList = ({ data }) => {

      return (
            <div >
                  <ul className={styles.data__container}>
                        <li className={styles.data}>
                              <p className={styles.info}>N°</p>
                              <p className={styles.realData}>{data.numero}</p>
                        </li>
                        <li className={styles.data}>
                              <p className={styles.info}>nome</p>
                              <p className={styles.realData}>{data.nome}</p>
                        </li>
                        <li className={styles.data}>
                              <p className={styles.info}>tipo</p>
                              <p className={styles.realData}>{data.tipo.map((s) => {return s + ' '}) }</p>
                        </li>
                        <li className={styles.data}>
                              <p className={styles.info}>B.S.</p>
                              <p className={styles.realData}>{data.esperienza_base}</p>
                        </li>
                  </ul>
            </div>
      )
}

export default InfoList