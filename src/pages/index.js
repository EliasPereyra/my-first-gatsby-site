import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the tutorial</p>
      <StaticImage
        alt="Coffee"
        src="../images/coffee.jpg"
      />
    </Layout>
  )
}

export default IndexPage
