import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import BannerInfo from '../../components/elements/BannerInfo';
import CardPost from '../../components/elements/CardPost';
import Loading from '../../components/elements/Loading';
import AddPostForm from '../../components/form/addPost';
import Error from '../Error';

function Component (props) {
  const { root, posts, actions } = props;
  const { isLoading, isError } = root;
  
  useEffect(() => {
    actions.getPosts();
  }, [actions]);

  const renderHeader = (
    <div className='w-full p-2 mb-1'>
      <BannerInfo className="bg-gradient-to-r from-pink-500 to-blue-500 text-white" subtitle="Type your feelings and submit to start" title="Pour out all your complaints" />
    </div>
  );

  const handleSubmitPost = async (values) => {
    const confirmed = window.confirm("Are you sure you want to post this post?");
    if (confirmed) {
      await actions.addPost(values);
    }
  };

  if (isError) {
    return <Error />
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Pour out all your complaints - Type your feelings and submit to start" />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {renderHeader}
          <div className="w-full p-2 mb-4 border-b pb-6">
            <AddPostForm onSubmit={handleSubmitPost} />
          </div>
          <div className="w-full flex flex-wrap">
            {posts && posts.map((post, index) => (
              <CardPost key={index} className="w-full md:w-1/2 p-2" title={post.title} userId={post.userId} id={post.id} body={post.body} />
            ))}
          </div>
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

