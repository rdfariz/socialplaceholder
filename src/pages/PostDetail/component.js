import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Layout from '../../components/layouts';
import CardPost from '../../components/elements/CardPost';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { match: { params: { id } }, root, home, post, comments, actions } = props;
  const { posts } = home;
  const { isLoading } = root;

  const history = useHistory();

  useEffect(() => {
    actions.getPostDetail(id);
    actions.getPostComments(id);
    actions.getPosts();
  }, [actions, id])
  
  const handleUpdatePost = async (payload) => {
    const confirmed = window.confirm("Are you sure you want to update this post?");
    if (confirmed) {
      await actions.updatePost(payload, id);
    }
  };

  const handleDeletePost = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      const deleted = await actions.deletePost(id);
      if (deleted) {
        alert('Successfully Deleted Post');
        history.push('/');
      } else {
        alert('Failed to Delete Post');
      }
    }
  };

  const renderContent = (
    post && (
      <CardPost
        className="mb-6"
        title={post.title}
        userId={post.userId}
        id={post.id}
        body={post.body}
        handleEditPost={handleUpdatePost}
        handleDeletePost={handleDeletePost}
        isDetail
      />
    )
  );
  
  const renderComments = (
    <div className="px-4">
      <h3 className="text-lg font-medium my-3">Comment</h3>
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
      <h3 className="text-md font-medium mt-4 md:mt-0 mb-2">More Articles</h3>
      {posts && posts.map((p, index) => (
        p.id !== post.id && index <= 4 && (
          <CardPost className="py-2" key={p.id} title={p.title} userId={p.userId} id={p.id} body={p.body} />
        )
      ))}
    </div>
  )

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Post {id}</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 md:pr-2">
            {renderContent}
            {renderComments}
          </div>
          <div className="w-full lg:w-4/12 md:pl-5">
            {renderSidebar}
          </div>
        </div>
      )}
    </Layout>
  )
}

Component.defaultProps = {
  post: {},
  comments: []
};

Component.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array
};

export default Component;