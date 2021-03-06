
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { Gray } from '../themes/Gray'
import {Header} from "./Header"
import GlobalStyle from './GlobalStyle/GlobalStyle'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'


const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45 rem;
  padding-top: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout