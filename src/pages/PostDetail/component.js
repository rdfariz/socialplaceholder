import React from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';

function Component (props) {
  const { match: { params: { id } } } = props;
  
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Post {id}</title>
      </Helmet>
      <h1>Post {id}</h1>
    </Layout>
  )
}

export default Component;