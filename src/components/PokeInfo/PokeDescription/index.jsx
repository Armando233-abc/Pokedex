import React from 'react'
import styles from './PokeDescription.module.css'
import PropTypes from "prop-types";

const PokeDescription = ({ description }) => {
      return (
            <div className={styles.PokeDescription__container}>
                  <p>
                        {description}
                  </p>
            </div>
      )
}

export default PokeDescription

PokeDescription.propTypes = {
      description: PropTypes.string,
};