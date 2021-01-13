import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
        <img
            src="https://www.praffulindirala.com/images/prafful-logo-white.png"
            alt=""
            className="img-fluid logo-dark"
          />
      </Link>
      </div>
    </div>
  </div>
)

export default Header
