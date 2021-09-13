import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardPost from '../../components/elements/CardPost';

function Component (props) {
  const { posts, isLoading, actions } = props;
  
  useEffect(() => {
    actions.getPosts();
  }, [actions]);

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
      </Helmet>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        posts && posts.map((post) => (
          <CardPost title={post.title} userId={post.userId} id={post.id} body={post.body} />
        ))
      )}
    </Layout>
  );
}

export default Component;

