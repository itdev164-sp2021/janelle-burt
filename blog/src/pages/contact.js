import React from "react"
import { Link }  from "gatsby"
import { graphql } from "gatsby"


import   Layout  from "../components/layout"
import  Image from "../components/image"
import  SEO  from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
          <SEO title="Home" />
          <h1>Contact Us</h1>
          <p>Please send all inqueries to: </p>
          <div>{company}</div>
          <div>{`C/O ${name}`}</div>
          <div>{address}</div>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/">Home</Link>
        </Layout>
      )
}

export default Contact

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
                }
            }
        }
    }
`