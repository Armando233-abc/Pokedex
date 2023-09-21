import React from 'react'
import styles from './InfoList.module.css'
import PropTypes from "prop-types";
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
                              <p className={styles.realData}>{data.tipo.map((s) =>   s + ' ')}</p>
                        </li>
                        <li className={styles.data}>
                              <p className={styles.info}>B.S.</p>
                              <p className={styles.realData}>{data.statistiche_base}</p>
                        </li>
                  </ul>
            </div>
      )
}

export default InfoList

InfoList.propTypes = {
      data: PropTypes.object,
};
