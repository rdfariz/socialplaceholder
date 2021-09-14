import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import BannerInfo from '../../components/elements/BannerInfo';
import CardPost from '../../components/elements/CardPost';
import CardAlbum from '../../components/elements/CardAlbum';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { match: { params: { id } }, root, user, userPosts, userAlbums, actions } = props;
  const { isLoading } = root;

  const [layoutActive, setLayoutActive] = useState(0);

  const menus = [
    { label: 'Posts', value: 0 },
    { label: 'Albums', value: 1 },
  ];

  useEffect(() => {
    actions.getUserDetail(id);
  }, [actions, id])

  useEffect(() => {
    if (layoutActive === 1) {
      actions.getUserAlbums(id);
    } else {
      actions.getUserPosts(id);
    }
  }, [actions, id, layoutActive]);
  
  const renderHeader = (
    <div className="w-full p-2">
      {user && (
        <div className='w-full mb-4'>
          <BannerInfo className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white" subtitle={user.username} title={user.name} />
        </div>
      )}
      <div className="w-full flex flex-wrap my-2">
        {menus && menus.map((menu, index) => (
          <button
            key={index}
            onClick={() => setLayoutActive(menu.value)}
            className={`font-medium border py-2 px-4 rounded mr-2 ${layoutActive === menu.value ? 'bg-pink-500 text-white' : 'text-gray-800 '}`}
          >
            {menu.label}
          </button>
        ))}
      </div>
    </div>
  );
  
  const renderContent = (
    <div className="w-full flex flex-wrap">
      {layoutActive === 0 ? (
        userPosts && userPosts.map((post, index) => (
          <CardPost className="w-full md:w-1/2 p-2" title={post.title} userId={post.userId} id={post.id} body={post.body} key={index} />
        ))
      ) : (
        userAlbums && userAlbums.map((album, index) => (
          <CardAlbum className="w-full md:w-1/2 p-2" title={album.title} id={album.id} userId={album.userId} key={index} />
        ))
      )}
    </div>
  );
  
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{user.name || 'User'} - Profile</title>
          <meta name="description" content="Pour out all your complaints - Type your feelings and submit to start" />
      </Helmet>
      <div className="w-full flex flex-wrap">
        {renderHeader}
        {isLoading ? <Loading /> : renderContent}
      </div>
    </Layout>
  )
}

Component.defaultProps = {
  user: {},
  root: {},
  userPosts: [],
  userAlbums: [],
  actions: {}
};

Component.propTypes = {
  user: PropTypes.object,
  root: PropTypes.object,
  userPosts: PropTypes.array,
  userAlbums: PropTypes.array,
  actions: PropTypes.object
};

export default Component;