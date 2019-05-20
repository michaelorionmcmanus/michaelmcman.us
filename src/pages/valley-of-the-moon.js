import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ValleyOfTheMoon from "../components/valley-of-the-moon"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Valley of the Moon" />
    <h1>Valley of the Moon</h1>
    <div style={{ marginBottom: `1.45rem` }}>
      <ValleyOfTheMoon slug={'valley-of-the-moon'}/>
    </div>
  </Layout>
)

export default IndexPage
