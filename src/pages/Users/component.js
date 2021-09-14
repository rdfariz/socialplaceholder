import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardUser from '../../components/elements/CardUser';
import Loading from '../../components/elements/Loading';
import BannerInfo from '../../components/elements/BannerInfo';

function Component (props) {
  const { root, users, actions } = props;
  const { isLoading } = root;
  
  useEffect(() => {
    actions.getUsers();
  }, [actions]);

  const renderHeader = (
    <div className='w-full p-2 mb-1'>
      <BannerInfo className="bg-gradient-to-r from-pink-500 to-blue-500 text-white" subtitle="Find your friends and make happiness together" title="People who have joined" />
    </div>
  );

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Users</title>
          <meta name="description" content="Pour out all your complaints - Type your feelings and submit to start" />
      </Helmet>
      {renderHeader}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-wrap">
          {users && users.map((user, index) => (
            <CardUser key={index} className="w-full md:w-1/2 p-2" title={user.name} id={user.id} body={user.username} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Component;

