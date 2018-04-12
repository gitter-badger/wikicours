import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styles from './index.module.css'

class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        <p className="about">
          Wikicours est un répertoire de cours en ligne de qualité, 📚✨ constamment amélioré par une communauté de professeurs et d'utilisateurs. 📝 Le tout gratuit et libre de droit. 💸🆓
        </p>

        <section className={styles.schoolAndGrade}>
          <div>
            <h4>Collège</h4>

            <div>
              {/* <Link to=''>6<sup>ème</sup></Link> */}
              <Link to=''>6e</Link>
              <Link to=''>5e</Link>
              <Link to=''>4e</Link>
              <Link to=''>3e</Link>
            </div>
          </div>

          <div>
            <h4>Lycée</h4>

            <div>
              {/* <Link to=''>2<sup>nde</sup></Link> */}
              <Link to=''>2nde</Link>
              <Link to=''>1ère</Link>
              <Link to=''>Terminale</Link>
            </div>
          </div>
        </section>

        <section>
          <h2>
            Contribuer
          </h2>
          
          <p>
            Tout le monde peut améliorer Wikicours.
          </p>
          
          <p>
            Users can already remix any public app on Glitch, and we want to give project owners control over their app's look,
            so we do not force buttons into any apps. What we do want, though, is for our community to <em>encourage</em> 
            others to remix and learn more about their apps, so we built a widget that you can include in your projects to generate 
            our neat little button wherever you like.
          </p>
          
          <p>
            Here's what it looks like: 
          </p>
        </section>
        
        <section>
          <h2>
            Add the button!
          </h2>
          
          <p>
            Users can already remix any public app on Glitch, and we want to give project owners control over their app's look,
            so we do not force buttons into any apps. What we do want, though, is for our community to <em>encourage</em> 
            others to remix and learn more about their apps, so we built a widget that you can include in your projects to generate 
            our neat little button wherever you like.
          </p>
          
          <p>
            Here's what it looks like: 
          </p>
        </section>
        
        <section>
          <h2>
            Happy Glitching! 
          </h2>
          
          <p>
            We want to know about all the cool stuff you're making, remixed or not–let us know it by tweeting <a href="http://twitter.com/glitch">@glitch</a>! 
          </p>
        </section>
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
