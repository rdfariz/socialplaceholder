import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardUser from '../../components/elements/CardUser';
import CardPost from '../../components/elements/CardPost';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { match: { params: { id } }, root, user, userPosts, actions } = props;
  const { isLoading } = root;

  useEffect(() => {
    actions.getUserDetail(id);
    actions.getUserPosts(id);
  }, [actions, id])
  
  const renderInfoUser = (
    user && (
      <CardUser className="w-full p-2" title={user.name} id={user.id} body={user.username} isDetail />
    )
  );
  
  const renderContent = (
    <div className="w-full flex flex-wrap">
      {userPosts && userPosts.map((post) => (
        <CardPost className="w-full md:w-1/2 p-2" title={post.title} userId={post.userId} id={post.id} body={post.body} />
      ))}
    </div>
  );
  
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{user.name || 'User'} - Profile</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-wrap">
          {renderInfoUser}
          {renderContent}
        </div>
      )}
    </Layout>
  )
}

Component.defaultProps = {
  user: {}
};

Component.propTypes = {
  user: PropTypes.object
};

export default Component;