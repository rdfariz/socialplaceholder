import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import BannerInfo from '../../components/elements/BannerInfo';
import CardPhoto from '../../components/elements/CardPhoto';
import Loading from '../../components/elements/Loading';
import Error from '../Error';

function Component (props) {
  const { match: { params: { id } }, root, albumsInfo, photos, actions } = props;
  const { isLoading, isError } = root;

  useEffect(() => {
    actions.getAlbumsInfo(id);
    actions.getAlbumsPhotos(id);
  }, [actions, id]);

  const renderHeader = (
    <div className='w-full p-2 mb-4'>
      <BannerInfo className="bg-gradient-to-r from-pink-500 to-blue-500 text-white" label="Album" title={albumsInfo.title} />
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
  
  if (isError) {
    return <Error />
  }

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{id} - Albums</title>
          <meta name="description" content="Pour out all your complaints - Type your feelings and submit to start" />
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