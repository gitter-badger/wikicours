import React from 'react'
import Link from 'gatsby-link'
import styles from './Navigation.module.css'

const NavLink = props => (
  <Link
    {...props}
    activeClassName={styles.activeNavLink}
  >
    <span>{props.children}</span>
  </Link>
)

const Navigation = () => (
  <nav>
    <NavLink to='/' exact>Accueil</NavLink>
    <NavLink to='/cours'>Cours</NavLink>
    <NavLink to='/contribuer'>Contribuer</NavLink>
    <NavLink to='/blog'>À propos</NavLink>
  </nav>
)

export default Navigation
