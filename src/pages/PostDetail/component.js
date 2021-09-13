import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardPost from '../../components/elements/CardPost';
import { shuffleArray } from '../../utils/text';

function Component (props) {
  const { match: { params: { id } }, home, post, comments, isLoading, actions } = props;
  const { posts } = home;

  useEffect(() => {
    actions.getPostDetail(id);
    actions.getPostComments(id);
    actions.getPosts();
  }, [actions, id])
  
  const renderContent = (
      post && (
        <CardPost className="mb-6" title={post.title} userId={post.userId} id={post.id} body={post.body} isDetail />
      )
  );
  
  const renderComments = (
    <div>
      <h3 className="text-lg font-medium my-3">Komentar</h3>
      {comments && comments.map((comment) => (
        <div className="mb-3 pb-4 border-b" key={comment.id}>
          <h2>by: <span className="font-medium">{comment.name}</span></h2>
          <p className="mt-1 text-sm">Comment: {comment.body}</p>
        </div>
      ))}
    </div>
  );

  const renderSidebar = (
    <div>
      <h3 className="text-md font-medium mt-4 md:mt-0 mb-2">Artikel Lainnya</h3>
      {
        posts && shuffleArray(posts).map((p, index) => (
          p.id !== post.id && index <= 4 && (
            <CardPost className="py-2" key={p.id} title={p.title} userId={p.userId} id={p.id} body={p.body} />
          )
        ))
      }
    </div>
  )

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Post {id}</title>
      </Helmet>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 md:pr-2">
            {renderContent}
            {renderComments}
          </div>
          <div className="w-full lg:w-4/12 md:pl-5 border-t md:border-0">
            {renderSidebar}
          </div>
        </div>
      )}
    </Layout>
  )
}

Component.defaultProps = {
  posts: [] 
};

Component.propTypes = {
  posts: PropTypes.array
};

export default Component;