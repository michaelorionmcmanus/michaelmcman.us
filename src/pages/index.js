import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ValleyOfTheMoon from "../components/valley-of-the-moon"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Posts</h1>
    <div style={{ marginBottom: `1.45rem` }}>
      <Link to="/valley-of-the-moon/">Valley of the Moon</Link>
    </div>
  </Layout>
)

export default IndexPage
