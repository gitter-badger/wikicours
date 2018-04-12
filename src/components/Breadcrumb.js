import React from 'react'
import Link from 'gatsby-link'

import styles from './Breadcrumb.module.css'

const Breadcrumbs = (props) => {
  // don't display breadcrumb if on homepage
  if (props.path === '/') {
    return null
  }

  /*
    builds an object like so:
    this path: /sublevel/subsublevel/deep/evendeeper
    will produce this object:
    {
      "sublevel":
        {
          "path":"/sublevel",
          "title":"sublevel"
        },
      "subsublevel":
        {
          "path":"/sublevel/subsublevel",
          "title":"subsublevel"
        },
      "deep":
        {
          "path":"/sublevel/subsublevel/deep",
          "title":"deep"
        },
      "evendeeper":
        {
          "path":"/sublevel/subsublevel/deep/evendeeper",
          "title":"evendeeper"
        }
      }
  */

  const pathMap = props.path
    .split('/')      // produces empty strings for leading and trailing slash
    .filter(Boolean) // removes falsy items and thus empty strings
    .reduce((accu, current, index, pathArray) => {
      const path = index !== 0
        ? accu[pathArray[ index - 1 ]].path + `/${current}`
        : `/${current}`
      return {
        ...accu,
        [current]: {
          path,
          title: current
        }
      }
    }, {})

  const crumbs = Object.keys(pathMap)
    .map(pathItem => pathMap[pathItem])
    .map((page, index, array) => {
      // if current page, return title without link
      if (index === array.length - 1) {
        return <li key={index}>{page.title}</li>
      }
      // if not current page, return link to it
      return <li key={index}><Link to={page.path}>{page.title}</Link></li>
    })

  return (
    <ol className={styles.breadcrumb}>
      <li><Link to='/'>Accueil</Link></li>
      {crumbs}
    </ol>
  )
}

export default Breadcrumbs
