import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

// Styles
import styles from './NavButton.module.scss'

interface INavButton {
  title: string
  to: string
  className: string
}

const NavButton: React.FC<INavButton> = ({ to, title, className }) => {
  return (
    <NavLink to={to} className={cn(styles.wrapper, className)}>
      {title}
    </NavLink>
  )
}

export default NavButton
