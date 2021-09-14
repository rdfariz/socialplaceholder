import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardPhoto from '../../components/elements/CardPhoto';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { match: { params: { id } }, root, albumsInfo, photos, actions } = props;
  const { isLoading } = root;

  useEffect(() => {
    actions.getAlbumsInfo(id);
    actions.getAlbumsPhotos(id);
  }, [actions, id]);

  const renderHeader = (
    <div className="w-full p-2 mb-4">
      <div className="w-full p-5 rounded-lg border bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="text-white">
          <p className="text-sm">Album Name:</p>
          <h2 className="text-lg font-bold">{albumsInfo.title}</h2>
        </div>
      </div>
    </div>
  );
  
  const renderContent = (
    <div className="w-full flex flex-wrap">
      {photos && photos.map((photo, index) => (
        <CardPhoto
          className="w-full md:w-1/2 lg:w-1/3 p-2"
          thumbnail={photo.thumbnailUrl}
          title={photo.title}
          url={photo.url}
          id={photo.id}
          key={index}
        />
      ))}
    </div>
  );
  
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{id || ''} - Albums</title>
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
  albumsInfo: {},
  photos: [],
  root: {},
  actions: {}
};

Component.propTypes = {
  albumsInfo: PropTypes.object,
  photos: PropTypes.array,
  root: PropTypes.object,
  actions: PropTypes.object
};

export default Component;