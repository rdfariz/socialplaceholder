import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Layout from '../../components/layouts';
import CardPost from '../../components/elements/CardPost';
import Loading from '../../components/elements/Loading';
import AddCommentForm from '../../components/form/addComment';
import Comment from '../../components/elements/Comment';

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
  
  const handleAddComment = async (values) => {
    const confirmed = window.confirm("Are you sure you want to add this comment?");
    if (confirmed) {
      await actions.addPostComment(values, id);
    }
  };

  const handleUpdateComment = async (values, commentId) => {
    const confirmed = window.confirm("Are you sure you want to update this comment?");
    if (confirmed) {
      await actions.updatePostComment(values, commentId);
    }
  };
  
  const handleDeleteComment = async (commentId) => {
    const confirmed = window.confirm("Are you sure you want to delete this comment?");
    if (confirmed) {
      await actions.deletePostComment(commentId);
    }
  };

  const renderContent = (
    post && (
      <CardPost
        className="mb-8"
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
      <h3 className="text-md font-bold mt-4 md:mt-0 mb-2">Comment</h3>
      {comments && comments.map((comment, index) => (
        <Comment
          key={index}
          id={comment.id}
          postId={comment.postId}
          email={comment.email}
          name={comment.name}
          body={comment.body}
          handleUpdateComment={handleUpdateComment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
      <div className="mt-6">
        <p className="mb-4 font-medium">Add your comment</p>
        <AddCommentForm onSubmit={handleAddComment} />
      </div>
    </div>
  );

  const renderSidebar = (
    <div>
      <h3 className="text-md font-bold mt-4 md:mt-0 mb-2">More Articles</h3>
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
          <title>{id} - Post</title>
          <meta name="description" content="Pour out all your complaints - Type your feelings and submit to start" />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap p-2">
          <div className="w-full">
            {renderContent}
          </div>
          <div className="w-full lg:w-8/12 md:pr-2">
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