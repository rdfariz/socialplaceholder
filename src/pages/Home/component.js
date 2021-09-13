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
        <div className="w-full flex flex-wrap">
          {posts && posts.map((post) => (
            <CardPost className="w-full md:w-1/2 p-2" title={post.title} userId={post.userId} id={post.id} body={post.body} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Component;

