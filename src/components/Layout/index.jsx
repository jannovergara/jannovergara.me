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
            { name: 'description', content: '#include<vector> unique_ptr<ClassName> make() const override for(auto&& t : list) return 0 virtual void prepare(int volume) = 0; ' },
            { name: 'keywords', content: 'Janno, Vergara, Janno Vergara, Physics, C++, Python, Javascript' },
            { name: 'google-site-verification', content: 'WYGvvZM3YJeHXNebajyieuAWbd0yoWsamZNkkhF5hAE' },
            { name: 'apple-mobile-web-app-title', content: 'https://jannovergara.me' },
            { name: 'application-name', content: 'https://jannovergara.me' },
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
