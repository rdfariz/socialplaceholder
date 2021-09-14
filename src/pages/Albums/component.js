import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import BannerInfo from '../../components/elements/BannerInfo';
import CardAlbum from '../../components/elements/CardAlbum';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { root, albums, actions } = props;
  const { isLoading } = root;

  useEffect(() => {
    actions.getAlbums();
  }, [actions]);

  const renderHeader = (
    <div className='w-full p-2 mb-1'>
      <BannerInfo className="bg-gradient-to-r from-pink-500 to-blue-500 text-white" subtitle="Capture your most beautiful moments with the most beautiful people" title="Albums" />
    </div>
  );
  
  const renderContent = (
    <div className="w-full flex flex-wrap">
      {albums && albums.map((album, index) => (
        <CardAlbum className="w-full md:w-1/2 p-2" title={album.title} id={album.id} userId={album.userId} key={index} />
      ))}
    </div>
  );
  
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Albums</title>
          <meta name="description" content="Capture your most beautiful moments with the most beautiful people" />
      </Helmet>
      <div className="w-full flex flex-wrap">
        {renderHeader}
        {isLoading ? (
          <Loading />
        ) : (
          renderContent
        )}
      </div>
    </Layout>
  )
}

Component.defaultProps = {
  albums: [],
  root: {},
  actions: {}
};

Component.propTypes = {
  albums: PropTypes.array,
  root: PropTypes.object,
  actions: PropTypes.object
};

export default Component;