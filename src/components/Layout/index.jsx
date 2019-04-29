import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet
          defaultTitle="Blog by Janno Vergara"
          meta={[
            { charSet: 'x-ua-compatible' },
            { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'keywords', content: 'Janno, Vergara, Janno Vergara, Physics, C++, cpp, initiative, modern, software, cpp initiative, modern cpp, modern c++, Python, Javascript' },
            { name: 'google-site-verification', content: 'WYGvvZM3YJeHXNebajyieuAWbd0yoWsamZNkkhF5hAE' },
            { name: 'apple-mobile-web-app-title', content: 'https://www.jannovergara.me' },
            { name: 'application-name', content: 'https://www.jannovergara.me' },
            { name: 'google', content: 'nositelinkssearchbox' },
            { name: 'google', content: 'notranslate' },
            { name: 'theme-color', content: '#c800ec' },
          ]}
        />
        {children}
      </div>
    )
  }
}

export default Layout
