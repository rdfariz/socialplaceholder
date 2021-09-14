import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardPost from '../../components/elements/CardPost';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { root, posts, actions } = props;
  const { isLoading } = root;
  
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
        <Loading />
      ) : (
        <div className="w-full flex flex-wrap">
          {posts && posts.map((post, index) => (
            <CardPost key={index} className="w-full md:w-1/2 p-2" title={post.title} userId={post.userId} id={post.id} body={post.body} />
          ))}
        </div>
      )}
    </Layout>
  );
}

Component.defaultProps = {
  posts: [],
  root: {},
  actions: {}
};

Component.propTypes = {
  posts: PropTypes.array,
  root: PropTypes.object,
  actions: PropTypes.object
};

export default Component;

