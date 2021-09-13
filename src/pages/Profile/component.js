import React from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';

function Component () {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Profile</title>
      </Helmet>
      <h1>Profile</h1>
    </Layout>
  )
}

export default Component;