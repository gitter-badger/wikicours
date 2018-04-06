import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to={'/'}>Gatsby Starter Blog</Link></h1>
        {this.props.children()}
      </div>
    )
  }
}

export default Template
