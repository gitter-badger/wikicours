import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.css'

// import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/Breadcrumb'

class Template extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h1>{this.props.location.pathname === '/' ? '✏️ Wikicours 📚' : <Link to='/'>✏️ Wikicours 📚</Link>}</h1>
          <h2>Des cours en ligne de qualité, libres de droits et améliorables par tous.</h2>
        </header>

        {/* <Navigation /> */}

        <Breadcrumbs path={this.props.location.pathname} />

        {this.props.children()}
      </div>
    )
  }
}

export default Template
